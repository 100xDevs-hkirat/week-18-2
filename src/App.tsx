import {useCallback, useEffect, useState} from 'react'
import {Todos} from "./Todos";

function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["First todo"]);

    const increment = function() {
        setCount((c) => c + 1);
    };

    const addTodo = function() {
        setTodos((t) => [...t, "New Todo"]);
    };

  return (
    <div style={{width: "100%", marginTop: 300}}>
        <div  style={{display: "flex", justifyContent: "center"}}>
            <Todos todos={todos} addTodo={addTodo} />
        </div>
        <br/><br/>
        <div style={{display: "flex", justifyContent: "center"}}>
            <b>Count: {count} </b>
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default App
