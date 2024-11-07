import ToDoCard from "./ToDoCard"


const DoneTodoList = (props) => {
    const {doneTodos, deleteTodos, filteredDoneTodos} = props
  return (
    <ul className="main">
      <h1>DONE TODOS</h1>
      {filteredDoneTodos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props} isDone={true} hideCheckButton={true} deleteTodos={()=>deleteTodos(todoIndex, true)}  key={todoIndex} todoIndex={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}

export default DoneTodoList