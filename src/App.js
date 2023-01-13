import React, {useState} from 'react'
import './App.css'


function App() {
  const [input, setInput] = useState("");
  const [myList, setList] = useState([])

  const submit = () => {
    // e.preventDefault();
    if (input===""){
      alert("Please enter a todo");
    }else{
      setList([...myList, input]);
      setInput('');
    }
  }

  return (
    <div className='container main'>
      <div className='container-sm'>
        <h1>My Todo</h1>
        <div className='form'>
          <input 
            type='text'
            placeholder='Enter todo'
            value={input}
            onChange={(e) => setInput(e.target.value)} 
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
        <ul>
          <li className='card'>
          {
            myList.map((todo, index) => (
               <li key={index}>{todo}</li>
             ))
          }
          </li>
        </ul>
      </div>
    </div>  
  )
}

export default App