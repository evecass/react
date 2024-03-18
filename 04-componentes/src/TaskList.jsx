import React from 'react';
import Task from './Task'; // Importa el componente Task
import './index.css'; // Importa el archivo de estilos CSS

// Componente TaskList que recibe las tareas y la función de cambio de estado como props
const TaskList = ({ tasks, handleTaskToggle }) => {
  // Contar las tareas completadas
  const completedTasksCount = tasks.filter(task => task.completed).length;
  // Contar las tareas no completadas
  const pendingTasksCount = tasks.length - completedTasksCount;

  return (
    <div>
      {/* Muestra el título y la cantidad de tareas completadas */}
      <h2 id='hechas'>Tareas Realizadas: {completedTasksCount}</h2>
      {/* Muestra el título y la cantidad de tareas pendientes */}
      <h2 id='nohechas'>Tareas Pendientes: {pendingTasksCount}</h2>
      {/* Mapea sobre cada tarea y renderiza el componente Task, pasando las props necesarias */}
      {tasks.map(task => (
        <Task key={task.id} task={task} handleTaskToggle={handleTaskToggle} />
      ))}
    </div>
  );
};

export default TaskList;