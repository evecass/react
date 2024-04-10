import React from 'react';
import Jugador from './Jugador';

const JugadoresList = ({ jugadores, onEditJugador, onDeleteJugador }) => {
  return (
    <div className="jugadores-list">
      <h2>Lista de Jugadores</h2>
      {jugadores.map(jugador => (
        <Jugador
          key={jugador.id}
          jugador={jugador}
          onEditJugador={onEditJugador}
          onDeleteJugador={onDeleteJugador}
        />
      ))}
    </div>
  );
};

export default JugadoresList;