import s from './welcomeModal.module.scss';

export default function WelcomeModal({open,handleModal}) {

  return (
    <>
    <div className={s.overlay} ></div>
    <div className={s.containerd} >WelcomeModal
    <button onClick={handleModal} >cerarr</button>
    </div>
    </>
  )
}
