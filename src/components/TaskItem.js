import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/todoSlice';

const TaskItem = ({ task }) => {

    //Local state for editing mode and edited text
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    //Dispatching action to edit task and toggle editing mode
    const handleEdit = () => {
        if (isEditing && editedText.trim()) {
            dispatch(editTask({ id: task.id, newText: editedText }));
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className={`flex items-center justify-between p-3 border-b ${task.completed ? 'bg-gray-100' : ''}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="flex-grow px-2 py-1 mr-2 text-gray-700 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            ) : (
                <span onClick={handleToggle}
                    className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>{task.text}</span>
            )}
            <button onClick={handleEdit}
                className="px-2 py-1 mr-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete}
                className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">Delete</button>
        </li>
    );
};

export default TaskItem;