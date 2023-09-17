
import MenuInstructionsBase from '../../molecules/MenuInstructionsBase/MenuInstructionsBase';
import s from './Instructions.module.scss';

export default function Instructions() {

  return (
    <section className={s.instructionsContainer}>
      <MenuInstructionsBase/>
    </section>
  )
}
