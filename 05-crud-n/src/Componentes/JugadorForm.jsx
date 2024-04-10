import React, { useState } from 'react';

const JugadorForm = ({ onSave }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [habilidades, setHabilidades] = useState([]);
  const [seleccionado, setSeleccionado] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSaveJugador = () => {
    const nuevoJugador = {
      nombre: nombre,
      descripcion: descripcion,
      habilidades: habilidades,
      seleccionado: seleccionado,
      categoria: categoria
    };
    onSave(nuevoJugador);
    // Limpiar los campos después de guardar
    setNombre('');
    setDescripcion('');
    setHabilidades([]);
    setSeleccionado('');
    setCategoria('');
  };

  return (
    <div className="jugador-form">
      <h2>Agregar Jugador</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label htmlFor="descripcion">Descripción:</label>
      <textarea
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      ></textarea>
      <label>Habilidades:</label>
      <div>
        <input
          type="checkbox"
          id="habilidad1"
          value="Velocidad"
          checked={habilidades.includes('Velocidad')}
          onChange={(e) =>
            habilidades.includes('Velocidad')
              ? setHabilidades(habilidades.filter(hab => hab !== 'Velocidad'))
              : setHabilidades([...habilidades, 'Velocidad'])
          }
        />
        <label htmlFor="habilidad1">Velocidad</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="habilidad2"
          value="Fuerza"
          checked={habilidades.includes('Fuerza')}
          onChange={(e) =>
            habilidades.includes('Fuerza')
              ? setHabilidades(habilidades.filter(hab => hab !== 'Fuerza'))
              : setHabilidades([...habilidades, 'Fuerza'])
          }
        />
        <label htmlFor="habilidad2">Fuerza</label>
      </div>
      <label>Seleccionado:</label>
      <div>
        <input
          type="radio"
          id="seleccionado1"
          value="Seleccionado 1"
          checked={seleccionado === 'Seleccionado 1'}
          onChange={(e) => setSeleccionado(e.target.value)}
        />
        <label htmlFor="seleccionado1">Seleccionado 1</label>
      </div>
      <div>
        <input
          type="radio"
          id="seleccionado2"
          value="Seleccionado 2"
          checked={seleccionado === 'Seleccionado 2'}
          onChange={(e) => setSeleccionado(e.target.value)}
        />
        <label htmlFor="seleccionado2">Seleccionado 2</label>
      </div>
      <label>Categoría:</label>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Selecciona una categoría</option>
        <option value="Categoria 1">Categoria 1</option>
        <option value="Categoria 2">Categoria 2</option>
      </select>
      <div className="buttons">
        <button onClick={handleSaveJugador}>Guardar</button>
        <button onClick={() => {
          setNombre('');
          setDescripcion('');
          setHabilidades([]);
          setSeleccionado('');
          setCategoria('');
        }}>Cancelar</button>
      </div>
    </div>
  );
};

export default JugadorForm;