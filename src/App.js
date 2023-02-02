import React, {useState} from 'react'
import './App.css'


function App() {
  const [input, setInput] = useState("");
  const [myList, setList] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);

  const submit = () => {
    if (input===""){
      alert("Please enter a todo");
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
   if(isCompleted===false){
    setIsCompleted(!isCompleted); 
    console.log(`${todo} has been been marked incomplete`)
   }else{
    setIsCompleted(!isCompleted); 
    console.log(`Yayy!!! ${todo} has been completed`)
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
                <li 
                  key={index}
                  onClick={() => {edit(todo)}}
                  >
                  {todo}
                </li>
                <input 
                  type="checkbox" 
                  value={todo}
                  onChange={() => {handleChange(todo)}} 
                />
                <button
                  className='btn-danger'
                  onClick={() => deleteTodo(index)}
                  >
                    delete
                  </button>
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