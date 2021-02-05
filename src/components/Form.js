import React from 'react';

function Form ({ setInputText, todos, setTodos, inputText }) {
    function handleInputText(e) { //Função para pegar o valor que foi digitado no input
        setInputText(e.target.value);
    }

    function handleTodoSubmit(e) { //Função para o formulário receber seus determinados objetos
        e.preventDefault(); //Previne que a página seja recarregada ao clicar no botão
        setTodos([...todos, { //Adicionando os Todos no input
            text: inputText,
            completed: false,
            id: Math.random() * 1000
        }]);
        setInputText(""); //Limpa o campo do input assim que o usuario clica em adicionar

    }

    return(
        <div>
            <form >
                <input 
                    type="text"
                    value={inputText} //Pegando o valor que foi digitado para limpar o input
                    onChange={handleInputText}  
                />
                <button 
                    type="submit" 
                    onClick={handleTodoSubmit}
                > 
                    Adicionar 
                </button>
            </form>
        </div>
    );
}

export default Form;