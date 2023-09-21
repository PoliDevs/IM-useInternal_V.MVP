import { ReactComponent as XIcon } from "../../../assets/XIcon.svg";
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

export default function InstructionTwo() {
  const [file, setFile] = useState(null);
  const [menu, setMenu] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const id = useSelector((state)=> state.user.comerceId)
  const dispatch = useDispatch();

  useEffect(() => {
    if (file !== null) {
      setSubmiting(false);
      const workbook = XLSX.read(file, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setMenu(data);
    }
  }, [file]);

  const clearMenu = () => {
    setFile(null);
    setMenu(null);
  };

  const handleClick = () => {
    let menuInfo = {
      menu: menu,
      commerceId: id
    }
    dispatch(postMenu(menuInfo));
    clearMenu();
  }

  return (
    <InstructionContainer>
      <main className={s.mainContainer}>
        <div className={s.textContainer}>
          <UploadMenuTitle text={"Empecemos con tu menú"} />
          <LineText
            text={"Intenta cumplir con los pasos antes de empezar a operar"}
            centered={true}
            bold={true}
          />
          <MenuStep
            number={2}
            text={"Sube  tu menú una vez que hayas guardado tus productos"}
          />
          <>
            {submiting ? (
              <SubmitLoader />
            ) : (
              <File
                step={2}
                typeIcon={"upload"}
                text={"Subir menú"}
                file={file}
                setFile={setFile}
                menu={menu}
                setMenu={setMenu}
                submitting={submiting}
                setSubmitting={setSubmiting}
              />
            )}
            {menu !== null && (
              <div className={s.uploadedFile}>
                <LineText text={"Menu.XML"} secundary={true} />
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
          helpText={"Necesito ayuda"}
          text={"Continuar"}
          path={menu && "/instructions/image"}
          handleClick={handleClick}
        />
      </main>
    </InstructionContainer>
  );
}
