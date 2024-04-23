import React from 'react'
import YElement from '../YElement/YElement'


export default function YList({ys}) {
  return (
    <div>
      <div>YList</div>
      {ys.map ((p_y) => <YElement key={p_y.id} y_element={p_y} />)}
      
    </div>
  )
}
