import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
    // selectig task from redux store
    const tasks = useSelector(state => state.todos.tasks);

    return (
        <ul className="divide-y divide-gray-200">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;