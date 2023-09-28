export const statusTables=(status)=>{
    return tables.map(()=>{tables.status===status})
}
  //Hacemos un array de array, un indice por orden
 export const allGroupedOrders = (arg) => {
    // Objeto para agrupar las órdenes por el número de orden
    const equalOrders = {};
    //Se utiliza un bucle forEach para recorrer cada objeto en el array ordenes.
    arg.forEach((cur) => {
      const numOrder = cur.order.split("-");
      const numberOrden = numOrder[1];
        //Se verifica si ya existe una entrada en el objeto ordenesAgrupadas con la clave numeroOrden. Si no existe,
      if (!equalOrders[numberOrden]) {
         //se crea un nuevo array vacío en esa clave.
        equalOrders[numberOrden] = [];
      }
        //Se agrega el objeto de orden actual al array correspondiente en ordenesAgrupadas utilizando push
      equalOrders[numberOrden].push(cur);
    });
    // Convertir el objeto en un array de arrays
    const result = Object.values(equalOrders);
    return result;
  };

  //objeto final de cada orden,para renderizar las cards
  export const renderOrdersEnd =  (value)=>{ 

   
   return value.map((cur, idx) => {
    //consultar 
    const menus = cur.map((item) => item.menu);
    const products = cur.map((item) => item.product);
    const dishes = cur.map((item) => item.dish);
    const aditional = cur.map((item) => item.detail);
    const details = cur.map((item) => item.detail);


    const discount = cur.map((item) => item.discount);
    const promotion = cur.map((item) => item.promotion);
    const surcharge = cur.map((item) => item.surcharge);
  
    // Función para combinar elementos con el mismo name y calcular el costo total
    const combineItems = (items) => {
      const combinedItems = {};
      items.forEach((item) => {
        if (typeof item === 'object' && item !== null && item.name !== undefined && item.name !== null) {
          if (!combinedItems[item.name]) {
            combinedItems[item.name] = { ...item, amount: 0, cost: 0 };
          }
          combinedItems[item.name].cost += item.cost;
          combinedItems[item.name].amount++;
        } else {
          return null; // Si 'item' no es un objeto, retorna null
        }
      });
      return Object.values(combinedItems);
    };
    
    //recorrer todas las ordenes y tomar el adicional de cada una 

    
  
    const combinedMenus = combineItems(menus);
    const combinedProducts = combineItems(products);
    const combinedDishes = combineItems(dishes);
  
    const newObj = {
      //esto lo sacamos solo de un indice
      tableNumber: !cur[0].delivery && cur[0].order.match(/M(\d+) -/)[1],
      orderNumber: cur[0].order.split("-")[1].trim(),
      hour: cur[0].hour,
      status: cur[0].status,
      delivery: cur[0].delivery,
      //toma los discoun de todas las ordenes
      discount:discount.reduce((acc,cur)=>acc+cur),
      promotion:promotion.reduce((acc,cur)=>acc+cur),
      surcharge:surcharge.reduce((acc,cur)=>acc+cur),
      //extraemos todos de cada order
      menus: combinedMenus,
      products: combinedProducts,
      dishes:combinedDishes,
      //details: details,
      
    };
  
    return newObj;
  })

};

