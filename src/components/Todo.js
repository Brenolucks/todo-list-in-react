import React, { useState, Text } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Todo () {
    return (
        <div>
            <h1> Lista de Tarefas </h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Todo;