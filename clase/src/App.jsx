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
function evaluarVistaInicio (){
  if (showForm) 
  return <PlatilloForm setShowForm={setShowForm}/>
  else{
    return(
    <>
    <button onClick={() => setShowForm(true)}>Agregar Platillo</button>
    <PlatilloList platillos={platillos}/>
    </>
    )
  }
}
  return (
    <>
    {evaluarVistaInicio ()}
    </>
  );
}

export default App
