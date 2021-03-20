import React, {useState} from 'react';
import Icon from "react-crud-icons";
import "react-crud-icons/dist/css/react-crud-icons.css";

function App(){

    const [todos, setTodos] = useState([ ]);
    const [todo, settodo] = useState('');

    const inputValue = e => {
        settodo(e.target.value);
    }

    const addTodos = () => {
        const newTodos = [...todos, { todo }];
        setTodos(newTodos);
        settodo('');
      };

    const completeTodos = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };


    return(
        <div>
            <h1>Assignment No.3 in React (Todo List)</h1>
            <input type="todo" onChange={inputValue} value={todo}/>
            <button onClick={() => addTodos()}> Add </button>
            <ul>
                {todos.map((item,index) => (
                    <li  style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
                        {item.todo} 
                    <Icon name = "check" tooltip = "Complete" theme = "light"onClick={() => {completeTodos(index)}}/>
                    <Icon name = "remove" tooltip = "Remove" theme = "light" onClick={() => {removeTodo(index)}}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;