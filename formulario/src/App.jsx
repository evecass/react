import { useState } from "react";
import "./App.css";
import YList from "./components/YList/YList";
import YForm from "./components/YForm/YForm";

function App() {
  const [ys, setYs] = useState([
    { id: 1, name: "Y1", descripcion: " Desc Y1" },
    { id: 2, name: "Y2", descripcion: " Desc Y2" },
    { id: 3, name: "Y3", descripcion: " Desc Y3" },
  ]);
  return (
    <>
      <YList ys={ys}/>
      <YForm />
    </>
  );
}

export default App;
