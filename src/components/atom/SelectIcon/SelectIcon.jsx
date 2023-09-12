
import s from './SelectIcon.module.scss';

export default function SelectIcon({icon}) {

  return (
    <div className={s.emojiSelector}>
      <select className={s.select} ></select>
    </div>
  );
}
