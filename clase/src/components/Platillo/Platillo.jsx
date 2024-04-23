import React from 'react'

export default function Platillo({platillo}) {
  return (
    <div>
      <b>Id:</b> {platillo.id} <br></br>
      <b>Nombre: </b> {platillo.name} <br></br>
      <b>Descripcion: </b> {platillo.descripcion}
    </div>
  )
}
