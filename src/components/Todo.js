import React from 'react';

function Todo({ text, todo, todos, setTodos }) {
    function deleteHandle(e) { //Função para deletar uma tarefa ou Todo
        setTodos(todos.filter((el) => el.id !== todo.id)) //Usando a função filter, para pegar apenas o elemento que foi escolhido pelo id.
    }
    
    function checkedHandle(e) { //Função para checar se a tarefa foi feita 
        setTodos(todos.map((item) => { //Usando a função map e retornando uma condição para verificar se o item da lista foi realmente concluido.
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }
    return(
        <div className="todo">
            <li className="todo-item"> {text} </li>
            <button onClick={checkedHandle}> Feito </button>
            <button onClick={deleteHandle}> Deletar </button>
        </div>
    );
}

export default Todo;