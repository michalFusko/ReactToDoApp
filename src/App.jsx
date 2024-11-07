import { useEffect, useState } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import DoneTodoList from "./components/DoneTodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState("")
  const [doneTodos, setDoneTodos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [todoDate, setTodoDate] = useState(Date)

  const filteredTodos = todos.filter((todo) => {
    return todo.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const filteredDoneTodos = doneTodos.filter((todo) => {
    return todo.toLowerCase().includes(searchTerm.toLowerCase())
  })
 

  const persistData = (newTodoList, newDoneTodoList) => {
    localStorage.setItem("todosData", JSON.stringify({ todos: newTodoList, doneTodos: newDoneTodoList }));
  };
  

  
  const updateTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList, doneTodos)
    setTodos(newTodoList)
  }

  const deleteTodos = (index, isDone = false) => {
    if(isDone){
      const newDoneTodoList = doneTodos.filter((todo, todoIndex) => {
        return todoIndex != index
      })
      persistData(todos, newDoneTodoList)
      setDoneTodos(newDoneTodoList)
    }else{
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex != index
      })
      persistData(newTodoList, doneTodos)
      setTodos(newTodoList)
    }
  }

  const editTodos = (index) => {
    const todoBeingEdited = todos[index]
    setNewTodos(todoBeingEdited)
    deleteTodos(index)
  }

  const markDoneTodos = (todoIndex) => {
    const doneTodo = todos[todoIndex];
    const newDoneTodoList = [...doneTodos, doneTodo];
    
    const newTodoList = todos.filter((_, index) => index !== todoIndex);
    
    setTodos(newTodoList);
    setDoneTodos(newDoneTodoList);
    
    persistData(newTodoList, newDoneTodoList);
  };
  
 
  
  useEffect(() => {
    const storedData = localStorage.getItem("todosData");
    if (storedData) {
      const { todos: storedTodos, doneTodos: storedDoneTodos } = JSON.parse(storedData);
      setTodos(storedTodos || []);
      setDoneTodos(storedDoneTodos || []);
    }
  }, []);

  

  return (
    <>
    <ToDoInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} updateTodos={updateTodos} newTodos={newTodos} setNewTodos={setNewTodos}></ToDoInput>
    <div className="main-container">
      <ToDoList filteredTodos={filteredTodos} todos={todos} deleteTodos={deleteTodos} editTodos={editTodos} markDoneTodos={markDoneTodos}></ToDoList>
      <DoneTodoList filteredDoneTodos={filteredDoneTodos} doneTodos={doneTodos} deleteTodos={deleteTodos}></DoneTodoList>
    </div>
    </>
  )
}

export default App
