import React from 'react'
import Platillo from '../PLatillo/Platillo'

export default function PlatilloList({platillos}) {
  return (
    <div>
    <div>PlatilloList</div>
    {platillos.map ((platillo) => <Platillo key={platillo.id} platillo={platillo}/>)}
    </div>
  )
}

