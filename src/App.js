import React, { useState } from 'react'
import './App.css'


function App() {
  const [input, setInput] = useState("");
  const [myList, setList] = useState([]);
  const [checked, setChecked] = useState([]);
  
 
  const submit = () => {
    if (input===""){
      // alert("Please enter a todo");
    }else{
      setList([...myList, input]);
      setInput('');
    }
  }

  const edit = (todo) => {
    setInput(todo);
  } 

  const deleteTodo = (index) => {   
   const newList = [...myList];
   newList.splice(index, 1);
   setList(newList);
  }

  const handleChange = (todo) => {
    if (checked.includes(todo)) {
      setChecked(checked.filter(t => t !== todo));
      console.log(`${todo} has been removed`);
    } else {
      setChecked([...checked, todo]);
      console.log(`${todo} has been added`);
    }
  }

  return (
    <div className='container main'>
      <div className='container-sm'>
        <h1>My Todo</h1>
        <div className='form'>
          <input 
            type='text'
            className='enterTodo'
            placeholder='Enter todo'
            value={input}
            required
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submit();
              }
            }}
            />
          
          <button
            className='btn btn-primary'
            onClick={() => submit(input)}
            >
            Add New
          </button>
        </div>
      </div>

      <div className='card'>
        <h1>My Todos</h1>
        <ul className='lists card-list'>
          {
            myList.map((todo, index) => {
             
              return( 
                <>
                  <div className='list-container'>
                  <li 
                    key={index}
                    onClick={() => {edit(todo)}}
                    >
                    {todo}
                  </li>
                  <input 
                    type="checkbox" 
                    className='checkbox'
                    value={todo}
                    checked={checked.includes(todo)}
                    onChange={() => handleChange(todo)} 
                  />
                  
                  <button
                    className='btn-danger'
                    onClick={() => deleteTodo(index)}
                    >
                      delete
                  </button>
                  </div>
                </>
              );
            })      
          }
        </ul>
      </div>
    </div>  
  )
}

export default App