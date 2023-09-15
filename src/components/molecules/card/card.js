export const statusTables=(status)=>{
    return tables.map(()=>{tables.status===status})
}

export const extractTableAndOrderNumbers=(value)=> {
    // Utilizamos una expresión regular para buscar el patrón "CxMy - z" y extraer los números de mesa y pedido.
    const regex = /C(\d+)M(\d+) - (\d+)/i;
    const match = value.match(regex);
  
    if (match) {
      // Los números de mesa y pedido se encuentran en los grupos de captura 1 y 3.
      const tableNumber = parseInt(match[1], 10);
      const orderNumber = parseInt(match[3], 10);
      return { tableNumber, orderNumber };
    } else {
      // Si no se encuentra el patrón, puedes devolver un valor por defecto o null.
      return null;
    }
  };
  