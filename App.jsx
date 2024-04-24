import { useState } from "react"
import Todo from "./components/Todo";
import './App.css'
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";



function App() { 
  const[todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "estudar react",
      category: "Estudos",
      isCompleted: false,
    },



  ]);

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const[sort, setSort] = useState("A-Z")

  const addTodo = (text, category) => {

    const newTodos = [...todos,
      
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

    setTodos(newTodos);

  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filtredTodos = newTodos.filter(todo => todo.id !== id ? todo :  null);
    setTodos(filtredTodos);
  };


  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    
    setTodos(newTodos);
    
  };
  

    return (
      <div className="app">
        <h1>Task List</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className="todo-list">
          {todos
          .filter((todo) =>
           filter === "All"
            ? true 
            : filter === "completed"  
            ?  todo.isCompleted 
            : !todo.isCompleted
          )
         
          .filter((todo => 
          todo.text.toLowerCase().includes(search.toLowerCase())))
          .sort((a,b) => 
          sort === "A-Z" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id}
             todo={todo} 
             removeTodo={removeTodo} 
             completeTodo={completeTodo}/>

        
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
      </div>
    );
  }

  export default App;