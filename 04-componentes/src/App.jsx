import { useState } from 'react'
import TaskList from './TaskList';
//import Confetti from 'react-confetti';
import './App.css'

const tasks = [
  { id: 1, title: 'Tarea 1', completed: false },
  { id: 2, title: 'Tarea 2', completed: false },
  { id: 3, title: 'Tarea 3', completed: false },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);

  // Función para cambiar el estado de la tarea completada
  const handleTaskToggle = taskId => {
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  // Función para verificar si todas las tareas están completas
  const allTasksCompleted = () => {
    return taskList.every(task => task.completed);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      {/* Renderiza el componente TaskList pasando las tareas como prop */}
      <TaskList tasks={taskList} handleTaskToggle={handleTaskToggle} />
      {/* Mostrar el efecto de confeti si todas las tareas están completas */}
      {allTasksCompleted() && <Confetti />}
    </div>
  );
}

export default App
