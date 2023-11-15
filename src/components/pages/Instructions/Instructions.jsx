import MenuInstructionsBase from '../../molecules/MenuInstructionsBase/MenuInstructionsBase';
import s from './Instructions.module.scss';
import Container from '../../atom/container/Container';

export default function Instructions() {

  return (
  <Container  marginTop>
    <MenuInstructionsBase/>
  </Container>
  )
}
{/* <section className={s.instructionsContainer}>
<MenuInstructionsBase/>
</section> */}

