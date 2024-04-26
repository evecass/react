import React from 'react'
import Platillo from '../PLatillo/Platillo'

export default function PlatilloList({platillos}) {
  function enlistarPlatillos (){
    return platillos.map ((platillo) => (
      <Platillo key={platillo.id} platillo={platillo}/>
      ))
  }

  return (
    <div>
    <div>PlatilloList</div>
    {platillos.length ? enlistarPlatillos() : 'no existen platillos'}
    </div>
  )
}

