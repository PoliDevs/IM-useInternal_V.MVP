import ConfigForm from "../components/molecules/configForm/ConfigForm";

export const renderContentRight = (value) => {
  switch (value) {
    case "datosPersonales":
      return {
        component: ConfigForm,
        props: {
          subTitle_text: "Datos personales",
          label_text_1: "Nombre y Apellido",
          label_text_2: "telefono",
        },
      };
    case "datosNegocio":
      return {
        component: ConfigForm,
        props: {
          subTitle_text: "Datos de negocio",
          label_text_1: "Nombre del negocio",
          label_text_2: "telefono",
        },
      };
    case "mercadoPago":
      return {
        component: ConfigForm,
        props: {
          subTitle_text: "Mercado pago",
          label_text_1: "alias",
          label_text_2: "key mercado pago",
        },
      };
    default:
      return null;
  }
};

export const getDateCurrent = () => {
  const dateCurrent = new Date();
  const year = dateCurrent.getFullYear();
  const month = String(dateCurrent.getMonth() + 1).padStart(2, "0"); // +1 porque los meses se indexan desde 0
  const day = String(dateCurrent.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
