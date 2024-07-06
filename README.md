# React Todo Application

This is a simple Todo application built with React and styled using Tailwind CSS via CDN.

## Features

- Add new tasks
- View list of tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Persistent storage using localStorage

## Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)

## Setup and Running the Application

1. Clone the repository:
git clone https://github.com/imdevk/react-todo-app 
cd react-todo-app

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

- `src/components/`: Contains React components
- `TaskInput.js`: Component for adding new tasks
- `TaskList.js`: Component for displaying the list of tasks
- `TaskItem.js`: Component for individual task items
- `src/redux/`: Contains Redux related files
- `todoSlice.js`: Redux slice for managing todo state
- `store.js`: Redux store configuration
- `src/App.js`: Main application component
- `src/index.js`: Entry point of the application
- `public/index.html`: HTML template, includes Tailwind CSS CDN

## Technologies Used

- React
- Redux (with Redux Toolkit)
- Tailwind CSS (via CDN)
