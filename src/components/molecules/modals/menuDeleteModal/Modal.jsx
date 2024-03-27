import s from "./modal.module.scss";
import Paragraph from "../../../atom/Paragraph/Paragraph";
import Title from "../../../atom/Title/Title";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { XMark } from "../../../atom/iconsHerocoins/icons";

export default function Modal({ open, title, text, text_2, handleModal,text_confirm,text_cancel }) {
  const navigate = useNavigate();

  const deleteMenu = () => {
    navigate(`/instructions/uploadMenu`);
  };

  return (
    <>
      {open ? (
        <>
          <div className={s.overlay} onClick={()=>handleModal()} ></div>
          <div className={s.container}>
            <XMark className={s.closed_modal} onClick={() => handleModal()} />
            <Title text={title} />
            <div className={s.content_texts}>
              <Paragraph text={text} noMargin />
              <Paragraph text={text_2} noMargin />
            </div>
            <div className={s.content_buttons}>
              <Button secondary onClick={() => handleModal()}>
                {text_cancel}
              </Button>
              <Button primary onClick={deleteMenu}>{text_confirm}</Button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
