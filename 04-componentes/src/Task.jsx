import React from 'react';

const Task = ({ task, handleTaskToggle }) => {
  const { id, title, completed } = task;

  // Función para manejar el cambio de estado de la tarea completada
  const handleToggleCompleted = () => {
    handleTaskToggle(id); // Cambia el estado de la tarea completada
  };

  return (
    <div>
      {/* Checkbox para marcar la tarea como completada */}
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleCompleted}
      />
      {/* Texto de la tarea */}
      <label>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </span>
      </label>
    </div>
  );
};

export default Task;