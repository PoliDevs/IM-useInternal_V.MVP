import axios from "axios";

//Traer las mesas a redux
export const fetchTables =async () => {
 const tables=await axios("http://localhost:3000/users/")
const x=tables.data;
return x[0].tables;
/* console.log(x[0].tables[1]) */
};
/* fetchTables() */

// Función para invertir el estado de "openLocal"
export const updateOpenLocal = async (userId) => {
  const url = `http://localhost:3000/users/${userId}`;
  try {
    const response = await axios.get(url);
    const user = response.data;
    
    // Invertir el estado de "openLocal"
    const newOpenLocal = !user.openLocal;
    
    // Actualizar el estado en el servidor
    const updateResponse = await axios.patch(url, { openLocal: newOpenLocal });
    
    console.log('Estado invertido:', updateResponse.data);
  } catch (error) {
    console.error('Error al invertir el estado:', error);
  }
};

// Llamada a la función para invertir el estado de "openLocal" para el usuario con ID 1
/* updateOpenLocal(1); */
export const handleStatus=async (tableId)=>{
  //nesesito un enpoint que solo devuelva las mesas
  //const getStatus=await axios(`http://localhost:3000/users/${userId}/tables/${tableId}`);ñ
  const getTable=await fetchTables().find(cur=>cur.id===tableId);
}

