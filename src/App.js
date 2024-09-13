import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        fetch('/dummyData.json')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error loading data:', error));
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setCurrentTask(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="bg-gray-200 py-10"> {/* Added padding on top and bottom */}
            <div className="main-container bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6 mb-6">
                <h1 className="text-center text-2xl font-bold mb-4">Todo List Application</h1>
                <input
                    type="text"
                    placeholder="Search Tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <TodoForm 
                    onAddTask={addTask} 
                    onEditTask={editTask} 
                    currentTask={currentTask} 
                />
                <TodoList 
                    tasks={tasks} 
                    onToggleComplete={toggleComplete} 
                    onDeleteTask={deleteTask} 
                    onEditInit={setCurrentTask}
                    searchTerm={searchTerm} 
                />
            </div>
        </div>
    );
};

export default App;
