import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import { useEffect, useState } from "react";
import SubmitLoader from "../../atom/SubmitLoader/SubmitLoader";
import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";
import LineText from "../../atom/LineText/LineText";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import File from "../../molecules/File/File";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import * as XLSX from "xlsx";
import s from "./InstructionTwo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { postMenu } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import Container from "../../atom/container/Container";

export default function InstructionTwo() {
  const [t] = useTranslation("global");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [menu, setMenu] = useState(null);
  const [comercio, setComercio] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const [error, setError] = useState(false);
  const id = useSelector((state) => state.user_internal.comerceId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file !== null) {
      const workbook = XLSX.read(file, { type: "buffer" });
      const worksheetName1 = workbook.SheetNames[0];
      const worksheetName2 = workbook.SheetNames[1];
      const worksheet = workbook.Sheets[worksheetName1];
      const worksheet2 = workbook.Sheets[worksheetName2];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const data2 = XLSX.utils.sheet_to_json(worksheet2);
      setMenu(data2);
      setComercio(data);
    }
  }, [file]);
  useEffect(() => {
    if (comercio !== null) {
      setSubmiting(false);
      if (comercio[0]["Nombre de comercio"]) {
        if (!comercio[0]["Nombre de comercio"]) {
          setError(true);
        } else setError(false);
      }
      if (comercio[0]["Commerce Name"]) {
        if (!comercio[0]["Commerce Name"]) {
          setError(true);
        } else setError(false);
      }
    }

    if (comercio && comercio.length > 3) {
      const nombreDelComercio = comercio[3]?.__EMPTY_2;
      const dirrecionDelComercio = comercio[4]?.__EMPTY_2;

      if (nombreDelComercio && dirrecionDelComercio) {
        // Guarda los valores en el localStorage
        localStorage.setItem("nombreDelComercio", nombreDelComercio);
        localStorage.setItem("dirrecionDelComercio", dirrecionDelComercio);
      } else {
        console.error(
          "Uno o ambos valores son undefined, no se puede guardar en localStorage."
        );
      }
    } else {
      console.error(
        "El arreglo 'comercio' no está definido o no tiene suficientes elementos."
      );
    }
  }, [comercio]);

  function emojiToUnicode(emoji) {
    if (!emoji) return null; // Devuelve una cadena vacía si emoji es nulo o indefinido

    const codeUnits = [];
    for (let i = 0; i < emoji.length; i++) {
      codeUnits.push(emoji.charCodeAt(i).toString(16).toUpperCase());
    }
    return `U+${codeUnits.join(" U+")}`;
  }

  const formattedMenu = () => {
    let objAditionals = { additional: null };
    let objProducts = { product: null };
    let objDishes = { dishes: null };
    let date = new Date().toISOString().substring(0, 10);
    let objDate = { date: date };
    setMenu(
      menu.map((m) => {
        if (m.Precio && m.Precio === undefined) m.Precio = null;
        if (m.Cost && m.Cost === undefined) m.Cost = null;
        m.Emoji = emojiToUnicode(m.Emoji);
        m["photo"] = m["Emoji"] || "";
        m["category"] = m["Name category"] || m["Categoria"];
        m["name"] = m["Name product"] || m["Producto"];
        m["cost"] = m["Cost"] || m["Precio"];
        m["description"] = m["Description"] || m["Descripción"];
        m["discount"] = m["Discount"] || m["Descuento"] || "";
        m["promotion"] = m["Promotion"] || m["Promoción"] || "";
        m["surcharge"] = m["Surcharge"] || m["Recargo"] || "";
        m["menuType"] = m["Menu type"] || m["Tipo de menu"] || "";
        m["validity"] = m["Validity"] || m["Validez"] || "";
        delete m["Emoji"];
        delete m["Name category"] || delete m["Nombre de la categoria"];
        delete m["Name product"] || delete m["Nombre de productos"];
        delete m["Cost"] || delete m["Precio"];
        delete m["Description"] || delete m["Descripción"];
        delete m["Discount"] || delete m["Descuento"];
        delete m["Promotion"] || delete m["Promoción"];
        delete m["Surcharge"] || delete m["Recargo"];
        delete m["Menu type"] || delete m["Tipo de menu"];
        delete m["Validity"] || delete m["Validez"];
        Object.assign(m, objAditionals);
        Object.assign(m, objProducts);
        Object.assign(m, objDishes);
        Object.assign(m, objDate);
      })
    );
  };

  const formattedCommerce = () => {
    const localStorageGoogleUser = localStorage.getItem("googleUser");

    // Eliminar comillas del valor del localStorage
    const googleUserWithoutQuotes = localStorageGoogleUser.replace(
      /['"]+/g,
      ""
    );
    setComercio(
      comercio.map((d) => {
        if (d["Commerce Name"]) {
          d["Commerce Name"] ? (d["name"] = d["Commerce Name"]) : "";
          d["Neighborhood"]
            ? (d["neighborhood"] = d["Neighborhood"])
            : (d["neighborhood"] = "");
          d["Address"]
            ? (d["address"] = d["Address"])
            : (d["address"] = d["address"] = "");
          d["Work schedule"]
            ? (d["workSchedule"] = d["Work schedule"])
            : (d["workSchedule"] = "");
          d["Email"] ? (d["email"] = d["Email"]) : (d["email"] = "");
          d["Phono"] ? (d["phono"] = d["Phono"]) : (d["phono"] = "");
          d["Type of food"]
            ? (d["tipoDeComida"] = d["Type of food"])
            : (d["tipoDeComida"] = "");
          d["Name"]
            ? (d["firstNameEmployeer"] = d["Name"])
            : (d["firstNameEmployeer"] = "");
          d["LastName"]
            ? (d["lastNameEmployeer"] = d["LastName"])
            : (d["lastNameEmployeer"] = "");
          d["googleUserEmployeer"] = googleUserWithoutQuotes || "";
          d["Secondary email"]
            ? (d["emailEmployeer"] = d["Secondary email"])
            : (d["emailEmployeer"] = "");
          d["Tables"] ? (d["mesas"] = d["Tables"]) : (d["mesas"] = "");

          delete d["Commerce Name"];
          delete d["Neighborhood"];
          delete d["Address"];
          delete d["Work schedule"];
          delete d["Email"];
          delete d["Phono"];
          delete d["Type of food"];
          delete d["Name"];
          delete d["LastName"];
          delete d["Google user"];
          delete d["Tables"];
          d["Secondary email"] && delete d["Secondary email"];
        } else {
          d["Nombre del comercio"]
            ? (d["name"] = d["Nombre del comercio"])
            : "";
          d["Barrio"]
            ? (d["neighborhood"] = d["Barrio"])
            : (d["Dirección"] = "");
          d["Dirección"]
            ? (d["address"] = d["Dirección"])
            : (d["address"] = d["address"] = d["address"] = "");
          d["Horarios"]
            ? (d["workSchedule"] = d["Horarios"])
            : (d["workSchedule"] = "");
          d["Email"]
            ? (d["email"] = d["Email"])
            : (d["email"] = d["email"] = "");
          d["Telefono"] ? (d["phono"] = d["Telefono"]) : (d["phono"] = "");
          d["Tipo de comida"]
            ? (d["tipoDeComida"] = d["Tipo de comida"])
            : (d["tipoDeComida"] = "");
          d["Nombre"]
            ? (d["firstNameEmployeer"] = d["Nombre"])
            : (d["firstNameEmployeer"] = d["firstNameEmployeer"] = "");
          d["Apellido"]
            ? (d["lastNameEmployeer"] = d["Apellido"])
            : (d["lastNameEmployeer"] = "");
          d["Usuario de Google"]
            ? (d["googleUserEmployeer"] = d["Usuario de Google"])
            : (d["googleUserEmployeer"] = "");
          d["Correo secundario"]
            ? (d["emailEmployeer"] = d["Correo secundario"])
            : (d["emailEmployeer"] = "");
          d["Mesas"] ? (d["mesas"] = d["Mesas"]) : (d["mesas"] = "");

          delete d["Nombre de comercio"];
          delete d["Barrio"];
          delete d["Dirección"];
          delete d["Horarios"];
          delete d["Email"];
          delete d["Telefono"];
          delete d["Tipo de comida"];
          delete d["Nombre"];
          delete d["Apellido"];
          delete d["Usuario de Google"];
          delete d["Mesas"];
          d["Correo secundario"] && delete d["Correo secundario"];
        }
      })
    );
  };

  const clearMenu = () => {
    setFile(null);
    setMenu(null);
    setComercio(null);
  };

  const handleClick = () => {
    formattedMenu();
    formattedCommerce();
    if (error) {
      clearMenu();
      setError(true);
      return alert("Se debe ingresar un nombre de comercio");
    } else {
      dispatch(postMenu(menu, comercio, id));
    }
  };

  return (
    <Container marginTop>
      <InstructionContainer>
        <main className={s.mainContainer}>
          <div className={s.textContainer}>
            <UploadMenuTitle text={t("instructions.title")} />
            <LineText
              text={t("instructions.sub title")}
              centered={true}
              bold={true}
            />
            <MenuStep number={2} text={t("instructions.steps.step_2")} />
            <>
              {submiting ? (
                <SubmitLoader />
              ) : (
                <File
                  step={2}
                  typeIcon={"upload"}
                  text={t("instructions.steps.text_2")}
                  file={file}
                  setFile={setFile}
                  menu={menu}
                  setMenu={setMenu}
                  submitting={submiting}
                  setSubmitting={setSubmiting}
                  setFileName={setFileName}
                />
              )}
              {menu !== null && (
                <div className={s.uploadedFile}>
                  <LineText text={fileName} secundary={true} />
                  <div className={s.icons}>
                    <XIcon
                      style={{ height: "24px", width: "24px" }}
                      onClick={clearMenu}
                    />
                  </div>
                </div>
              )}
            </>
          </div>
          <InstructionButton
            helpText={t("instructions.button.i need help")}
            text={t("instructions.button.continue")}
            path={menu && !error && "/instructions/onDemand"}
            handleClick={handleClick}
          />
        </main>
      </InstructionContainer>
    </Container>
  );
}
