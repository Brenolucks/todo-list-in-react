import React, { useState } from 'react';

function TodoList (props) {
    const [task, setTask] = useState([]);
    const [itemList, setItemList] = useState([]); //estado da lista

    function addItemList(e) {
        e.preventDefault(); //nao carrega outra pagina quando for clicado
        if(Text) {
            setItemList([...itemList, task]); //pega todos os itens da lista e adiciona um novo
            setTask(""); //limpa o campo quando adiciona
        }
    }
    return(
        <div>
            <ul className="todo-list">
                {props.itemList.map (item => (<li>{item}</li>))}
            </ul>
        </div>
    );
}

export default TodoList;