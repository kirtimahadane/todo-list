import React, { useState, useEffect } from 'react';

import Todo from './Todo';
import firebase from 'firebase';
import db from './firebase';

 
const App = () => {
  const [todos, setTodos]=useState([]);
  const[input, setInput]=useState("");
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
   
      setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
    })
  }, [])
  // when the app loads we need to fetch todos from the database as they get added/ removed
  const addTodo=(event)=>{
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
      
    })
 
  //setTodos([...todos, input]);
    setInput("");
  }
  return (
    <div className="app">
      <h1> Todo List App</h1>
      <form >
        
  <input type="text"
   value={input} 
  onChange={(e)=>setInput(e.target.value)}
  />
<button type="submit" onClick={addTodo} disabled={!input}>+</button>
  
      </form>
  
    <div className="todos">
      {todos.map(todo=>
          <Todo todo={todo}/> 
         
     
    )
    }
    </div>
        

    </div>
  )
}

export default App
