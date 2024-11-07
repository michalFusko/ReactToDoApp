import ToDoCard from "./ToDoCard"

const ToDoList = (props) => {
  const {todos, deleteTodos, filteredTodos} = props

  return (
    <ul className="main">
      <h1>TODOS</h1>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props} isDone={false} key={todoIndex} todoIndex={todoIndex} deleteTodos={() => deleteTodos(todoIndex)}>
            <p>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}

export default ToDoList