import s from "./contentColumn.module.scss";

export default function ContentColumn({
  children,
  justifyContent,
  width,
  height,
  border,
  alignItems,
  background,
  margin,
  marginBottom,
  boxShadow,
  borderRadius,
  padding
}) {
  //space-around;space-between;space-evenly;center;
  return (
    <div
      className={s.contentColumn}
      style={{
        justifyContent,
        width,
        height,
        border,
        alignItems,
        background,
        margin,
        marginBottom,
        boxShadow,
        borderRadius,
        padding
      }}
    >
      {children}
    </div>
  );
}
