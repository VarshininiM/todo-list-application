// import React, { useState } from 'react';

// const TodoForm = ({ onAddTask, onEditTask, currentTask }) => {
//     const [title, setTitle] = useState(currentTask ? currentTask.title : '');
//     const [description, setDescription] = useState(currentTask ? currentTask.description : '');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const task = {
//             title,
//             description,
//             completed: false,
//             lastUpdated: new Date().toISOString(),
//         };

//         if (currentTask) {
//             onEditTask({ ...currentTask, ...task });
//         } else {
//             onAddTask(task);
//         }

//         setTitle('');
//         setDescription('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//             <input
//                 type="text"
//                 placeholder="Task Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded"
//             />
//             <textarea
//                 placeholder="Task Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded"
//             />
//             <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
//                 {currentTask ? 'Update Task' : 'Add Task'}
//             </button>
//         </form>
//     );
// };

// export default TodoForm;


import React, { useState, useEffect } from 'react';

const TodoForm = ({ onAddTask, onEditTask, currentTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            title,
            description,
            completed: false,
            lastUpdated: new Date().toISOString(),
        };

        if (currentTask) {
            onEditTask({ ...currentTask, ...task });
        } else {
            onAddTask(task);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                {currentTask ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
};

export default TodoForm;
