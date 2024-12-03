import React from 'react';
import TaskList from './components/TaskList';
import GestorTask from './components/GestorTask';
import PendingTasks from './components/PendingTasks';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Gestor de Tareas</h1>
        <PendingTasks />
        <GestorTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;









