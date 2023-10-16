import s from "./layoutContainer.module.scss";

export default function LayoutContainer({ children }) {
  return <section className={s.container}>{children}</section>;
}
