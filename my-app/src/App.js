import './App.css';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  //lägger till en todo i listan
  function addTodo(e) {
    e.preventDefault();
    if (input !== "") {
      setTodos([{ id: `${input}-${Date.now()}`, input }, ...todos]);
      setInput("");
    }
  };
  //tar bort en todo
  function DeleteTodo(id){
    let delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  //tar bort alla todos
  function clearList (){
    setTodos([])
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo list</h1>
        <form className='todoForm' onSubmit={addTodo}>
          <input type='text' placeholder='Lägg-till todo...' value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
        <div className="searchbar">
          <input type='text' placeholder='Sök todos...' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <br></br>
      <h1>Att göra:</h1>
        <ul className='allTodos'> 
          {
            todos.filter((item) =>{ 
              return search.toLowerCase() === '' 
              ? item 
              : item.id.toLowerCase().includes(search)
            }).map((t) =>(
              <li className='Todos'>  
              <span className='todoText' 
              key={t.id}> 
              {t.input}
              </span>   
              <button onClick={()=>DeleteTodo(t.id)}>Delete</button>       
            </li>
            ))}  
        </ul> 
        <div>
          <button className='DeleteAll' onClick={clearList}> Delete All</button>
        </div>
      </div>
    </div>
  );
}
export default App;
