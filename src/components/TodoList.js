import React, { useState } from 'react';

const TodoList = ({ tasks, onToggleComplete, onDeleteTask, onEditInit, searchTerm }) => {
    const [expandedTaskId, setExpandedTaskId] = useState(null);

    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleExpand = (id) => {
        setExpandedTaskId(expandedTaskId === id ? null : id);
    };

    return (
        <ul className="list-none p-0 m-0">
            {filteredTasks.map(task => (
                <div key={task.id} className='mt-5'>
                    <li className="bg-gray-100 border border-gray-300 mb-4 p-4 rounded relative hover:bg-gray-200 shadow-md">
                        <h3 className="text-lg font-semibold cursor-pointer" onClick={() => toggleExpand(task.id)}>
                            {task.title}
                        </h3>
                        {expandedTaskId === task.id && (
                            <>
                                <p className="text-sm text-gray-600">{task.description}</p>
                                <p className="text-sm text-gray-500">Last Updated: {new Date(task.lastUpdated).toLocaleString()}</p>
                            </>
                        )}
                        <div className="mt-2 flex justify-between items-center">
                            <button onClick={() => onToggleComplete(task.id)} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                {task.completed ? 'Mark Done' : 'Mark as Incomplete'}
                            </button>
                            <div className="flex space-x-2">
                                <button onClick={() => onDeleteTask(task.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    Delete
                                </button>
                                <button onClick={() => onEditInit(task)} className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    );
};

export default TodoList;
