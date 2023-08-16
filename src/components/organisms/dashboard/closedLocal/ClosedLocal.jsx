import { Icon } from 'semantic-ui-react';
import s from './closedLocal.module.scss';
import {Container} from 'semantic-ui-react';
import { useTranslation } from "react-i18next";

export default function ClosedLocal({open}) {
  const [t, i18n] = useTranslation("global");

    const open_close=open;

  return <div className={s.container_Closed}>
    <Container className={s.centered_content}>
      <Icon name="warehouse" size='big'/>
      <h2>{t("internal.header.closed local.premises closed")}</h2>
      <span>{t("internal.header.closed local.Open the store to start")}</span>
      <br />
      <span>{t("internal.header.closed local.to receive orders")}</span>
    </Container>
  </div>
}
