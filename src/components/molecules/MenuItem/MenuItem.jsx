import { ReactComponent as Eye } from "../../../assets/Eye.svg";
import { ReactComponent as EyeSlash } from "../../../assets/EyeSlash.svg";
import LineText from "../../atom/LineText/LineText";
import SelectIcon from "../../atom/SelectIcon/SelectIcon";
import s from "./MenuItem.module.scss";
import { Button } from "semantic-ui-react";
import ButtonGreen from "../../atom/buttons/ButtonGreen";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../../atom/loading/Loading";

export default function MenuItem() {
  const [filterClickedButton, setFilterClickedButton] = useState("Categoria");
  const [menu,setMenu]=useState(false);
/*   console.log(menu) */
  const comerceId=useSelector(state=>state.user_internal.comerceId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`menu/lastMenu/${comerceId}`);
        setMenu(response.data);
      } catch (error) {
        console.error("Error al obtener el menú:", error);
      }
    };
    fetchData();
  }, []);

  const handleClickEyes = async (index, id) => {
    try {
      const updatedMenu = [...menu]; // Clonar el estado del menú actual
      const updatedItem = { ...updatedMenu[index] }; // Clonar el elemento actual
      updatedItem.active = !updatedItem.active; // Cambiar el estado 'active'
      updatedMenu[index] = updatedItem; // Actualizar el elemento en el clon del menú
      setMenu(updatedMenu); // Actualizar el estado 'menu' con el nuevo menú
  
      // Luego, realizar la solicitud PUT al servidor para cambiar el estado 'active' en la base de datos
      if (updatedItem.active) {
        await axios.put(`menu/active/${id}`);
      } else {
        await axios.put(`menu/inactive/${id}`);
      }
    } catch (error) {
      console.error("Error al cambiar el estado active:", error);
    }
  };
  
  return (
    <div className={s.menuItemContainer}>
      <div>
        <ButtonGreen
          text={"Categoria"}
          active={filterClickedButton === "Categoria"}
          onClick={() => setFilterClickedButton("Categoria")}
        ></ButtonGreen>
        <ButtonGreen
          text={"Productos"}
          active={filterClickedButton === "Productos"}
          onClick={() => setFilterClickedButton("Productos")}
        ></ButtonGreen>
      </div>
      <br />
      <Button primary size="huge">
        Agregar Producto
      </Button>
      <div>
        <div className={s.content_menu_table}>
          <section className={s.menu_opciones}>
            <LineText text={"Emoji"} secundary={true}  />
            <LineText text={"Producto"} secundary={true}  />
            <LineText text={"Precio"} secundary={true}  />
            <LineText text={"On/Off"} secundary={true} />
          </section>
          <div className={s.menu_table}>
            {!menu?<Loading/>:menu.map((item, index) => (
              <div
                key={index}
                className={`${s.line_menu} ${
                  !item.active ? s.inactiveLine : ""
                }`}
              >
                <SelectIcon className={s.emoji} icon={item.photo} />
                <LineText text={item.name} disabled={!item.active} />
                <LineText text={`$${item.cost}`} disabled={!item.active} />
                <div onClick={() => handleClickEyes(index,item.id)}>
                  {item.active?<Eye className={s.eyeIcon}></Eye>:<EyeSlash className={s.eyeIconSlash}></EyeSlash>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}