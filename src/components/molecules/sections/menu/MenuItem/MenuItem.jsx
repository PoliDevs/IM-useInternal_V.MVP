import LineText from "../../../../atom/LineText/LineText";
import s from "./MenuItem.module.scss";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../../../../atom/loading/Loading";
import { useTranslation } from "react-i18next";
import { Eye, Eye_slash } from "../../../../atom/iconsHerocoins/icons";

export default function MenuItem() {
  const [t, i18n] = useTranslation("global");
  const [menu, setMenu] = useState(false);

  const comerceId = useSelector((state) => state.user_internal.comerceId);

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
  }, [comerceId]);

  const handleClickEyes = async (index, id) => {
    console.log(index, id);
    try {
      const updatedMenu = [...menu]; // Clonar el estado del menú actual
      const updatedItem = { ...updatedMenu[index] }; // Clonar el elemento actual
      updatedItem.active = !updatedItem.active; // Cambiar el estado 'active'
      updatedMenu[index] = updatedItem; // Actualizar el elemento en el clon del menú
      // Luego, realizar la solicitud PUT al servidor para cambiar el estado 'active' en la base de datos
      if (updatedItem.active) {
        await axios.put(`menu/active/${id}`);
      } else {
        await axios.put(`menu/inactive/${id}`);
      }
      setMenu([...updatedMenu]);
    } catch (error) {
      console.error("Error al cambiar el estado active:", error);
    }
  };

  //const sortedMenu = menu && menu.length&& menu.sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1));

  const menuToLowerCase =
    menu &&
    menu.length &&
    menu.map((cur) => ({ ...cur, name: cur.name.toLowerCase() }));
  console.log(menuToLowerCase);
  const sortedMenu =
    menu &&
    menu.length &&
    menu.sort((a, b) => {
      // Ordenar por estado activo (activos primero)
     /* const sortByActive = a.active === b.active ? 0 : a.active ? -1 : 1;

      // Si tienen el mismo estado, ordenar alfabéticamente por nombre
      const sortByAlphabetical = a.name.localeCompare(b.name);

      // Aplicar ambos criterios de ordenación
      return sortByActive !== 0 ? sortByActive : sortByAlphabetical;*/
      const sortByAlphabetical = a.name.localeCompare(b.name);
      return sortByAlphabetical
    });
  console.log(menu);

  return (
    <div className={s.menuItemContainer}>
      <Button primary size="small" disabled >
        {t("menu.menu item.add product")}
      </Button>
      <div>
        <div className={s.content_menu_table}>
          <section className={s.menu_opciones}>
            {/* <LineText text={t("menu.menu item.emoji")} secundary={true} /> */}
            <LineText text={t("menu.menu item.category")} secundary={true} />
            <LineText text={t("menu.menu item.product")} secundary={true} />
            <LineText text={t("menu.menu item.price")} secundary={true} />
            <LineText text={t("menu.menu item.on/off")} secundary={true} />
          </section>
          <div className={s.menu_table}>
            {!sortedMenu ? (
              <Loading />
            ) : (
              sortedMenu.map((item, index) => (
                <div
                  key={index}
                  className={`${s.line_menu} ${
                    !item.active ? s.inactiveLine : ""
                  }`}
                >
                  <LineText text={item.category.category} disabled={!item.active} />
                  {/* <LineText className={s.emoji} icon={item.photo} /> */}
                  <LineText text={item.name} disabled={!item.active} />
                  <LineText text={`$${item.cost}`} disabled={!item.active} />
                  <div onClick={() => handleClickEyes(index, item.id)}>
                    {item.active ? (
                      <Eye heigth={24}></Eye>
                    ) : (
                      <Eye_slash heigth={24} />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
