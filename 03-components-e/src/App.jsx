import React, { useState } from 'react';
import './App.css';
import DishCard from './DishCard/DishCard';

function App() {
  // Estado para mostrar/ocultar solo productos en stock
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  // Función para cambiar el estado del checkbox
  const handleCheckboxChange = () => {
    setShowOnlyInStock(!showOnlyInStock);
  };

  // Arreglo de objetos con los datos de los platos
  const dishes = [
    {
      id: 1,
      name: "Plato 1",
      description: "Descripción del plato 1",
      image_src: "/Naruto.jpg",
      chin_ya_no_hay: "¡Chin, ya no hay!",
      stock: false // Este plato está en stock
    },
    {
      id: 2,
      name: "Plato 2",
      description: "Descripción del plato 2",
      image_src: "/Naruto2.jpg",
      chin_ya_no_hay: "Sí hay",
      stock: true // Este plato está fuera de stock
    },
    {
      id: 3,
      name: "Plato 3",
      description: "Descripción del plato 3",
      image_src: "/Naruto3.jpg",
      chin_ya_no_hay: "¡Chin, ya no hay!",
      stock: false // Este plato está en stock
    }
  ];

  return (
    <>
      <h1>Mi primer componente</h1>
      {/* Checkbox para mostrar/ocultar solo productos en stock */}
      <label>
        <input
          type="checkbox"
          checked={showOnlyInStock}
          onChange={handleCheckboxChange}
        />
        Mostrar solo productos en stock
      </label>
      <div>
        {/* Renderizar los componentes de acuerdo a lo que hay en el array de objetos */}
        {dishes.map((dish) => (
          // Verifica si se debe mostrar este plato según el estado del checkbox
          // Si showOnlyInStock es false o el plato está en stock, se muestra
          !showOnlyInStock || dish.stock ? (
            <DishCard
              key={dish.id}
              image_src={dish.image_src}
              name={dish.name}
              description={dish.description}
              chin_ya_no_hay={dish.chin_ya_no_hay}
            />
          ) : null // Si no, no se muestra nada
        ))}
      </div>
    </>
  );
}

export default App;
