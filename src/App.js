import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Container, Hero, Title } from 'reactbulma';

function App() {
  const [inputText, setInputText] = useState(""); //Estado do input

  const [todos, setTodos] = useState([]); //Estado dos todos
  
    return (
      <Hero>
      <Hero.Body>
      <Container className="App">
        <Title>
          <h1>Lista de tarefas</h1>
        </Title>
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
      </Container>
      </Hero.Body>
      </Hero>
    );
}

export default App;
