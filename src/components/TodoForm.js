import React, { useState } from 'react';

function TodoForm (props) {
    const [task, setTask] = useState(""); //estado da tarefa
    //funçao para salvar o que o usuario digita no input
    function handleInputTask(e) {
        const inputTask = e.target.value;
        setTask(inputTask);
    }

    //funçao para adicionar item na lista
    function addItem (e) {
        e.preventDefault();
        if (task) {
            props.onAddItem(task)
            setTask("");
        }
    }

    return (
        <form className="todo-form"> 
                <input 
                    type="text"
                    value={task} //limpa o campo
                    placeholder="Adicione uma tarefa"
                    onChange={handleInputTask} //salva o que o usuario digitar    
                />
                <button 
                  type="submit" 
                  onClick={addItem} /** quando clicar adiciona o item na lista */ > 
                    Adicionar 
                </button>
            </form>
    );
}

export default TodoForm;