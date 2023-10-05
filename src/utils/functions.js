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
  return new Date().toJSON().slice(0, 10);

/*   const year = dateCurrent.getFullYear();
  const month = String(dateCurrent.getMonth() + 1).padStart(2, "0"); // +1 porque los meses se indexan desde 0
  const day = String(dateCurrent.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; */
};
export const getLastMonday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Diferencia de días para llegar al lunes
  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - diff);
  
  const year = lastMonday.getFullYear();
  const month = String(lastMonday.getMonth() + 1).padStart(2, '0');
  const day = String(lastMonday.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

export const roundToTwoDecimalPlaces=(number)=> {
  if (Number.isFinite(number) && !Number.isInteger(number)) {
    return number.toFixed(2);
  }
  return number;
}