/* eslint-disable no-unreachable */
import { useDispatch, useSelector } from "react-redux";
import { getAllPos } from "../../../redux/actions";
import { useEffect, useRef } from "react";
import { useState } from "react";
import s from "./QrCodeGenerator.module.scss";
import ReactToPrint from "react-to-print";
import CryptoJS from "crypto-js";
import QRCode from "qrcode";
import React from "react";
import JSZip from "jszip";
import { useTranslation } from "react-i18next";
import Loading from "../../atom/loading/Loading";
import { Button } from "semantic-ui-react";

export default function QrGenerator() {
  const [t, i18n] = useTranslation("global");
  const commerceId = useSelector((state) => state.user_internal.comerceId);
  const allPos = useSelector((state) => state.allPos);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedColor, setSelectedColor] = useState(t("generator qr.white"));
  const [number, setNumber] = useState(0);
  const [zip, setZip] = useState();
  const [toPrint, setToPrint] = useState();
  const [names, setNames] = useState([]);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(true);
  let colorQr = {
    [t("generator qr.white")]: { dark: "#2b2b2b", light: "#fefefe" },
    [t("generator qr.orange")]: { dark: "#2b2b2b", light: "#f57c3f" },
    [t("generator qr.yellow")]: { dark: "#2b2b2b", light: "#ffcc00" },
    [t("generator qr.blue")]: { dark: "#2b2b2b", light: "#6997fa" },
    [t("generator qr.green")]: { dark: "#2b2b2b", light: "#7eba8d" },
    [t("generator qr.purple")]: { dark: "#2b2b2b", light: "#9b86db" },
  };

  let nameColors = [
    t("generator qr.white"),
    t("generator qr.orange"),
    t("generator qr.yellow"),
    t("generator qr.blue"),
    t("generator qr.green"),
    t("generator qr.purple"),
  ];

  const array = [];
  // const names = [];
  const componentRef = useRef();
  const dispatch = useDispatch();
  const qrProps = {
    width: 300,
    margin: 1,
    color: colorQr[selectedColor],
  };
  const key = import.meta.env.VITE_REACT_APP_KEY;

  //?cifro la url
  const cifrarUrl = (url) => {
    const objetoCifrado = CryptoJS.AES.encrypt(url, key).toString();
    return objetoCifrado;
  };

  //cifrarUrl()

  //?descifro la url
  // const descifrarUrl = (url) => {
  //   const bytes = CryptoJS.AES.decrypt(
  //     "U2FsdGVkX19uu5cq311Cxo4OwthXNXx2VvKxivdoNyI=",
  //     key
  //   );
  //   const objetoOriginal = bytes.toString(CryptoJS.enc.Utf8);
  //   return objetoOriginal;
  // };

  //descifrarUrl()

  useEffect(() => {
    dispatch(getAllPos(commerceId));
    setLoading(false);
  }, [commerceId, dispatch]);

  useEffect(() => {
    setToPrint(null);
    setNames([]);
    setDone(false);
  }, [selectedSector, selectedTable]);

  useEffect(() => {
    toPrint && generateZip(toPrint);
  }, [done]);

  const addName = (name) => {
    setNames((prevNames) => [...prevNames, name]);
  };

  const handleSectorSelect = (e) => {
    if (e.target.value === "Todos") {
      setSelectedSector(e.target.value);
    } else {
      let sector = allPos.filter((s) => s.name === e.target.value);
      setSelectedSector(sector);
    }
    setSelectedTable("");
  };

  const handleTableSelect = (e) => {
    setSelectedTable(e.target.value);
  };
  const handleColorSelect = (e) => {
    setSelectedColor(e.target.value);
  };
  //console.log(selectedColor)

  const generateZip = async (array) => {
    //? Convierto los elementos de array a tipo Blob
    const promises = array.map(async (s) => {
      const res = await fetch(s);
      const blob = await res.blob();
      return blob;
    });
    //? Genero un array de Blobs
    const result = await Promise.all(promises);
    //? Creo zip con los codigos QR
    const zip = new JSZip();
    result.forEach((blob, index) => {
      // zip.file(`Mesa ${index + 1}.png`, blob);
      zip.file(`${names[index]}.png`, blob);
    });

    const readme = zip.folder("readme");
    readme.file("readme.txt", "Created with JSZip - Powered by I-menu");

    const zipFile = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipFile);
    setZip(url);
  };

  //!Tomo la informacion del Qr a generar
  //!Puede generarse uno solo o varios, segun corresponda.
  const generateArray = async () => {
    if (selectedTable === "Todos") {
      // for (const p of selectedSector[0].pos) {
      for (const p of allPos[0].pos) {
        // let name = `Sector ${selectedSector[0].name} - Mesa ${p.id}`;
        let url = p.qrCode;
        let urlParts = url.split("/");
        let nunTable = urlParts[urlParts.length - 1];
        let urlFirst = urlParts.slice(0, 4).join("/"); // Toma los primeros 4 elementos de la URL
        let result = cifrarUrl(url.substring(urlFirst.length + 1)); // Toma el resto de la URL

        let name = `Sector Ventas - ${t("card.table")} ${nunTable}`;
        addName(name);
        //* Encriptar Url de la mesa.

        //* Encriptar Url de la mesa.

        const r = await QRCode.toDataURL(`${urlFirst}/${result}`, qrProps);
        array.push(r);
      }
    } else {
      const p = allPos[0].pos.find((p) => p.id == selectedTable);
      let url = p.qrCode;
      let urlParts = url.split("/");
      let nunTable = urlParts[urlParts.length - 1];
      let urlFirst = urlParts.slice(0, 4).join("/"); // Toma los primeros 4 elementos de la URL
      let result = cifrarUrl(url.substring(urlFirst.length + 1)); // Toma el resto de la URL
      if (p) {
        let name = `Sector Ventas - ${t("card.table")} ${nunTable}`;
        addName(name);
        const r = await QRCode.toDataURL(`${urlFirst}/${result}`, qrProps);
        array.push(r);
      }
    }
    setToPrint(array);
    setDone(true);
  };
  //!Prepara los Codigos Qr para imprimir
  const QrToPrintCodes = () => {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {names.length ? (
          toPrint.map((q, i) => (
            <div key={i} style={{ margin: "5px" }}>
              <img src={q} alt="a Qr code" />
              <h4 style={{ color: "#2b2b2b", textAlign: "center" }}>
                {`${names[i]}`}
              </h4>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  };

  //!Componente para mostrar los Codigos Qr para imprimir
  // eslint-disable-next-line react/display-name
  const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <QrToPrintCodes />
      </div>
    );
  });

  return loading ? (
    <Loading />
  ) : (
    <div className={s.mainContainer}>
      <div className={s.headerContainer}>
        {allPos[0]?.pos ? (
          <div className={s.selectContainer}>
            <label className={s.label}>{t("generator qr.select pos")}</label>
            <select
              value={selectedTable}
              onChange={handleTableSelect}
              className={s.select}
              placeholder="Seleccione una opción"
            >
              <option value="" disabled hidden>
                {t("generator qr.select an option")}
              </option>
              <option value="Todos">{t("generator qr.value_option")}</option>
              {allPos.map((p) =>
                p.pos.map((pos, index) => {
                  let url = pos.qrCode;
                  let nunTable = url.split("/").slice(6).toString();
                  return (
                    <option key={index} value={pos.id}>{`${p.name} - ${t(
                      "card.table"
                    )} ${nunTable}`}</option>
                  );
                })
              )}
            </select>

            <label className={s.label}>{t("generator qr.select color")}</label>
            <select
              value={selectedColor}
              onChange={handleColorSelect}
              className={s.select}
            >
              {nameColors.map((cur, idx) => {
                return (
                  <option key={idx} value={cur}>
                    {cur}
                  </option>
                );
              })}
            </select>
          </div>
        ) : (
          selectedSector !== "" && <p>No hay mesas asignadas a este sector</p>
        )}
        {
          //* Boton para generar Codigos Qr*//}
        }
        <Button
          primary
          size="large"
          onClick={() => selectedTable && generateArray()}
        >
          {t("generator qr.generate code")}
        </Button>
      </div>
      {/* {qrCode && <img src={qrCode} />} */}
      <div className={s.buttons}>
        {
          //* Boton para descargar los Codigos Qr *//
        }
        <a
          href={zip}
          download="QrCodes.zip"
          className={`${s.downloadButton} ${zip && toPrint && s.visible}`}
        >
          {t("generator qr.dowload code")}
        </a>
        {
          //* Boton para imprimir los Codigos Qr *//
        }
        <ReactToPrint
          trigger={() => (
            <button className={`${s.printButton} ${toPrint && s.visible}`}>
              {t("generator qr.print code")}
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      {toPrint ? <ComponentToPrint ref={componentRef} /> : null}
    </div>
  );
}
