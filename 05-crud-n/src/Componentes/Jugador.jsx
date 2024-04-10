import React from 'react';

const Jugador = ({ jugador, onEditJugador, onDeleteJugador }) => {
  const { id, nombre, descripcion, habilidades, seleccionado, categoria } = jugador;

  return (
    <div className="jugador">
      <h3>{nombre}</h3>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Habilidades:</strong> {habilidades.join(', ')}</p>
      <p><strong>Seleccionado:</strong> {seleccionado}</p>
      <p><strong>Categoría:</strong> {categoria}</p>
      <div className="jugador-buttons">
        <button onClick={() => onEditJugador(id)}>Editar</button>
        <button onClick={() => onDeleteJugador(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Jugador;