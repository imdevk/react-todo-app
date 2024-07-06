import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        editTask: (state, action) => {
            const { id, newText } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.text = newText;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        }
    }
});

export const { addTask, deleteTask, toggleTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;