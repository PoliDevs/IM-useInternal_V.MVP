import { ReactComponent as Eye } from "../../../assets/Eye.svg";
import { ReactComponent as EyeSlash } from "../../../assets/EyeSlash.svg";
import LineText from "../../atom/LineText/LineText";
import SelectIcon from "../../atom/SelectIcon/SelectIcon";
import s from "./MenuItem.module.scss";
import { Button } from "semantic-ui-react";
import ButtonGreen from "../../atom/buttons/ButtonGreen";
import { useState } from "react";

export default function MenuItem() {
  const [categoriaButtonActive, setCategoriaButtonActive] = useState(false);
  const [productosButtonActive, setProductosButtonActive] = useState(true);
  //eyes
  const [onOffEyes, setOnOffEyes] = useState(menu.map(() => true));

  const handleClickEyes = (index) => {
    console.log(menu[index])
    menu[index].active=!menu[index].active;
    const newOnOffEyes = [...onOffEyes];
    newOnOffEyes[index] = !newOnOffEyes[index]; // Invertir el valor en el índice dado
    setOnOffEyes(newOnOffEyes);
  };

  const handleCategoriaButtonClick = () => {
    setCategoriaButtonActive(true);
    setProductosButtonActive(false);
  };

  const handleProductosButtonClick = () => {
    setCategoriaButtonActive(false);
    setProductosButtonActive(true);
  };

  return (
    <div className={s.menuItemContainer}>
      <div>
        <ButtonGreen
          text={"Categoria"}
          onClick={handleCategoriaButtonClick}
          active={categoriaButtonActive}
        ></ButtonGreen>
        <ButtonGreen
          text={"Productos"}
          onClick={handleProductosButtonClick}
          active={productosButtonActive}
        ></ButtonGreen>
      </div>
      <br />
      <Button primary size="huge" /* style={{ width: "90%" }} */>
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
            {menu.map((item, index) => (
              <div
                key={index}
                className={`${s.line_menu} ${
                  !item.active ? s.inactiveLine : ""
                }`}
              >
                <SelectIcon className={s.emoji} />
                <LineText text={item.producto} disabled={!item.active} />
                <LineText text={`$${item.cost}`} disabled={!item.active} />
                <div onClick={() => handleClickEyes(index)}>
                  {onOffEyes[index] ? (
                    <Eye className={s.eyeIcon}></Eye>
                  ) : (
                    <EyeSlash className={s.eyeIconSlash}></EyeSlash>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const menu = [
  {
    producto: "milanesas con papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "milanesas con papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "milanesas con papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "milanesas con papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "milanesas con papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "lomo al plato con pure de calabaza",
    cost: "3200",
    active: true,
  },
  {
    producto: "lomo al plato con pure de calabaza y arroz",
    cost: "3200",
    active: true,
  },
  {
    producto: "papas fritas",
    cost: "3200",
    active: true,
  },
  {
    producto: "papas fritas",
    cost: "3200",
    active: true,
  },
];
