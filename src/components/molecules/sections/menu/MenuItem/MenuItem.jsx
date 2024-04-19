import { useDispatch } from "react-redux";
import LineText from "../../../../atom/LineText/LineText";
import s from "./MenuItem.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../../../../atom/loading/Loading";
import { useTranslation } from "react-i18next";
import { Eye, Eye_slash } from "../../../../atom/iconsHerocoins/icons";
import { setMenuChanges } from "../../../../../redux/actions";
import { updateMenuItemActive } from "../../../../../utils/functions";
import { useApplyMenuChanges } from "../../../../../hooks/useApplyMenuChanges";
export default function MenuItem() {
  const [t, i18n] = useTranslation("global");
  const [menu, setMenu] = useState(false);

  // const [activeEyeId, setActiveEye] = useState(null);
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const menuChanges = useSelector((state) => state.changes);
  const dispatch = useDispatch();

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

  useApplyMenuChanges(menuChanges, menu, setMenu, updateMenuItemActive);

  const handleClickEyes = async (index, id) => {
    const updatedMenu = updateMenuItemActive(menu, index, !menu[index].active);
    setMenu(updatedMenu);

    dispatch(setMenuChanges({ index, id, active: !menu[index].active }));
    // clearTimeout(debounceTimeout.current);

    // debounceTimeout.current = setTimeout(() => {
    //   applyMenuChanges();
    // }, 1000);
    // clearTimeout(debounceTimeout.current);
  };

  // const debounceTimeout = useRef(null);

  //const sortedMenu = menu && menu.length&& menu.sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1));

  const menuWithCapitalizedNames =
    menu &&
    menu.length &&
    menu.map((cur) => ({
      ...cur,
      name: cur.name.charAt(0).toUpperCase() + cur.name.slice(1).toLowerCase(),
      category:
        cur.category.category.charAt(0).toUpperCase() +
        cur.category.category.slice(1).toLowerCase(),
    }));

  const sortedMenu =
    menuWithCapitalizedNames &&
    menuWithCapitalizedNames.length &&
    menuWithCapitalizedNames.sort((a, b) => {
      const sortByAlphabetical = a.name.localeCompare(b.name);
      return sortByAlphabetical;
    });
  return (
    <div className={s.menuItemContainer}>
      {/* <Button primary size="small" disabled >
        {t("menu.menu item.add product")}
      </Button> */}
      <div>
        <div className={s.content_menu_table}>
          <section className={s.menu_opciones}>
            {/* <LineText text={t("menu.menu item.emoji")} secundary={true} /> */}
            <LineText text={t("menu.menu item.category")} secundary={true} />
            <LineText text={t("menu.menu item.menu")} secundary={true} />
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
                  <LineText text={item.category} disabled={!item.active} />
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
