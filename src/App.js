import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(""); //Estado do input

  const [todos, setTodos] = useState([]); //Estado dos todos
  
    return (
      <div className="App">
        <header>
          <h1>Lista de tarefas</h1>
        </header>
        <Form //Usando funçoes como props
          inputText={inputText} 
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
        />
        <TodoList //Usando as funçoes como props
          setTodos={setTodos} 
          todos={todos}
        />
      </div>
    );
}

export default App;
