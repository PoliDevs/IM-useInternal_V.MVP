import s from './contentBasic.module.scss';

export default function ContentBasic({textAlign,border,borderRadius,children,width,height,background,backgroundImage,backgroundSize,backgroundRepeat,backgroundPosition,display,justifyContent,alignItems}) {
  return (
    <div className={s.contentBasic} style={{textAlign,border,width,height,borderRadius,background,backgroundImage,backgroundSize,backgroundRepeat,backgroundPosition,display,justifyContent,alignItems}}>{children}</div>
  )
}
