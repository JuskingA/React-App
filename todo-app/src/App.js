// src/App.js

import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        const newTodo = { id: Date.now(), text: inputValue };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo App</h1>
                <form onSubmit={addTodo}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add a new todo"
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <TodoList todos={todos} onDelete={deleteTodo} />
            </header>
        </div>
    );
}

export default App;
