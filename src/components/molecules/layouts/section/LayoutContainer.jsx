import s from "./layoutContainer.module.scss";

export default function LayoutContainer({ children,padding,margin}) {
  return <section className={s.container} style={{padding,margin}}>{children}</section>;
}
