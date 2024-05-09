import axios from 'axios';
import { clearMenuChanges } from '../redux/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export const useApplyMenuChanges = async (
  menuChanges,
  menu,
  setMenu,
  updateMenuItemActive
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const applyMenuChanges = () => {
      try {
        menuChanges.forEach(({ index, id, active }) => {
          const updatedMenu = updateMenuItemActive(menu, index, active);

          setMenu([...updatedMenu]);

          if (active) {
            axios.put(`menu/active/${id}`);
          } else {
            axios.put(`menu/inactive/${id}`);
          }
        });

        dispatch(clearMenuChanges());
      } catch (error) {
        console.error('Error al cambiar el estado active:', error);
      }
    };
    if (menuChanges.length > 0) {
      applyMenuChanges();
    }
  }, [dispatch, menu, menuChanges, setMenu, updateMenuItemActive]);
};
