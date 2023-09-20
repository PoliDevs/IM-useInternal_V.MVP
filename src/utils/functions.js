import ConfigForm from "../components/molecules/configForm/ConfigForm";
import MenuStep from "../components/molecules/MenuStep/MenuStep";
import MenuItem from "../components/molecules/MenuItem/MenuItem";

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
    
    
      case "Gestionar menu actual":
      return {
        component: MenuItem,
        props: {
          text:"MenuActual.xlm",
          const:"asd",
          active:"asd"
        },
      };
    case "Eliminar menu actual":
      return {
        component: MenuStep,
        props: {
          text:"Menu.xlm",
          icon_1:"ArrowDownload",
          className:"menu_option",
          icon_2:"XIcon"
        },
      };
    case "Descargar plantilla de menu":
      return {
        component: MenuStep,
        props: {
          text:"Descargar plantilla",
          icon_1:"ArrowDownload",
          className:"menu_option",
          icon_2:""
        },
      };
    case "Logo del local":
      return {
        component: MenuStep,
        props: {
          text:"LogoBStore.jpg",
          icon_1:"ArrowDownload",
          className:"menu_option",
          icon_2:"",
          buttom:true
        },
      };
    default:
      return null;
  }
};
