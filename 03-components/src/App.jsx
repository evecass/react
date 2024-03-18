import React, { useState } from 'react';
import DishCard from './DishCard/DishCard'; // Importa el componente DishCard desde su ubicación

function App() {
  // Arreglo de objetos con los datos de los platillos
  const [dishes, setDishes] = useState([
    { image_src: 'public/tacosalpastor.jpg', name: 'Taco', description: 'Tacos al pastor con cebolla y cilantro', chin_ya_no_hay: 'En stock ' },
    { image_src: 'public/hamburguesa.png', name: 'Hamburguesa', description: 'Hamburguesa con queso y verduras', chin_ya_no_hay: 'En stock' },
    { image_src: 'public/pizzaqueso.jpg', name: 'Pizza', description: 'Pizza de puro queso', chin_ya_no_hay: 'chin_ya_no_hay' },
  ]);

  // Estado para controlar la visibilidad de los platillos sin stock
  const [showOutOfStock, setShowOutOfStock] = useState(false);

  // Función para cambiar la visibilidad de los platillos sin stock
  const handleToggleOutOfStock = () => {
    setShowOutOfStock(!showOutOfStock);
  };

  return (
    <div className="App">
      <h1>Mis comidas favoritas</h1> 
      <input type="checkbox" checked={showOutOfStock} onChange={handleToggleOutOfStock} /> Mostrar platillos sin stock {/* Checkbox para controlar la visibilidad de los platillos sin stock */}
      {dishes.map((dish, index) => (
        //(dish.chin_ya_no_hay === 'En stock' && !showOutOfStock) ? null : // Verifica si el platillo está en stock y si se debe mostrar
        (dish.chin_ya_no_hay === 'chin_ya_no_hay' && !showOutOfStock) ? null : // Verifica si el platillo está sin stock y si se debe mostrar
        <DishCard key={index} {...dish} /> // Renderiza el componente DishCard con los datos del platillo
      ))}
    </div>
  );
}

export default App;
