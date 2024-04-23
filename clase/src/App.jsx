import { useState } from "react";
import "./App.css";
import PlatilloList from "./components/PlatilloList/PlatilloList";
import PlatilloForm from "./components/PlatilloForm/PlatilloForm";

function App() {
  const [platillos, setPlatillos] = useState ([
  {id: 1, name: "Platillo 1", descripcion: " Desc platillo 1" },
  {id: 2, name: "Platillo 2", descripcion: " Desc platillo 2" },
  {id: 3, name: "Platillo 3", descripcion: " Desc platillo 3" }
]);

const [showForm, setShowForm] = useState(false);
  return (
    <>
    <button onClick={() => setShowForm(!showForm)}>Agregar Platillo</button>
    {showForm && <PlatilloForm></PlatilloForm>}
    
    {!showForm && <PlatilloList platillos={platillos}/>}

    {platillos.length == 0 ? 'No hay platillos' : <PlatilloList platillos={platillos}/>}
    </>
  );
}

export default App
