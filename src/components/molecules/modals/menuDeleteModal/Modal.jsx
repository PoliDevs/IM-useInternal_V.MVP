import s from "./modal.module.scss";
import Paragraph from "../../../atom/Paragraph/Paragraph";
import Title from "../../../atom/Title/Title";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Modal({ open, title, text, text_2, handleModal,text_confirm,text_cancel }) {
  const navigate = useNavigate();

  const deleteMenu = () => {
    navigate(`/instructions`);
  };

  return (
    <>
      {open ? (
        <>
          <div className={s.overlay}></div>
          <div className={s.container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              height="35"
              width="35"
              onClick={() => handleModal()}
              color="#000000"
              style={{
                position: "relative",
                left: "90%",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

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
