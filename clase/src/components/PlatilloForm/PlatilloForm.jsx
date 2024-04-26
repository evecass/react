import React from 'react'
import './PlatilloForm.css'

export default function PlatilloForm({setShowForm}) {
  return (
    <>

<div>PlatilloForm</div>

<form action="">

<div className="section-form">
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id='nombre'/>
</div>

<div className="section-form">
    <label htmlFor="descripcion">Descripción</label>
    <textarea id='descripcion' rows="8"/>
</div>

</form>

<button onClick={() => {}}> Guardar </button>

<button onClick={()=> setShowForm(false)}>
  Cancelar
</button>

    </>
  )
}
