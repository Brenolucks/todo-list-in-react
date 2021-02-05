import React from 'react';
import Todo from './Todo';

function TodoList ({ todos, setTodos }) { //Desestruturando e adicionando props
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => ( //Usando a função map, para pegar o que foi digitado e adicionar na lista.
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos}
                        todo={todo} 
                        text={todo.text} 
                        key={todo.id} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;