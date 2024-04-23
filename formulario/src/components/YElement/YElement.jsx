import React from 'react'

export default function YElement({y_element}) {
  return (
    <div>
      <b>Id</b> {y_element.id} <br />
      <b>Nombre: </b> {y_element.name} <br />
      <b>Descripcion</b> {y_element.descripcion}
    </div>
  )
}
