import React,{useState} from 'react';
import TodoForm from './TodoForm';
import { AiOutlineEdit} from 'react-icons/ai';
import { IoMdCloseCircleOutline} from 'react-icons/io';

function Todo() {

    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    return todos.map((todo,index) =>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={()=> completeTodo(todo.id) }>
                {todo.text}
            </div>
            <div className={icons}>
            <IoMdCloseCircleOutline/>
            <AiOutlineEdit/>
            </div>
        
        </div>
    ))
}

export default Todo
