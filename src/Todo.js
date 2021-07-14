import React, {useState} from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import db from './firebase';


const Todo = (props) => {

const[open, setOpen]=useState(false)
 const [input, setInput]=useState("")
  const handleClose=()=>{
    setOpen(false)
  }
  const updateTodo=()=>{
    //update todo with new input text
    db.collection('todos').doc(props.todo.id).set({
      todo:input
    },{merge:true})
    setOpen(false);
  }
 

  return (
    <>
      
<div className= "todo">
      
      <p>
      {props.todo.todo}
      </p>
 
    

      { open ===true? 
     
(<div className="modal-inner">
  
  <input value={input} placeholder={props.todo.todo} onChange={(e)=>setInput(e.target.value)}/>
 
 <button onClick={updateTodo}>Update Todo</button>

</div>):(
  <div className="one">
<FaEdit onClick={(e)=>setOpen(true) }></FaEdit>
      
      <FaTrashAlt onClick={event=>db.collection('todos').doc(props.todo.id).delete()}></FaTrashAlt> 
      </div>)
      }

   </div>
</>
  )

       
  
}

export default Todo
