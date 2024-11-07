
const ToDoCard = (props) => {
  const {children, deleteTodos, todoIndex, editTodos, hideCheckButton, markDoneTodos, isDone} = props

  return (
    <>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <div className="actions-btn-container">
          <button onClick={() => {
            editTodos(todoIndex)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          {!hideCheckButton && <button onClick={() => {
            markDoneTodos(todoIndex)
          }}>
            <i className="fa-solid fa-check"></i>
          </button>}
          <button onClick={() => {
            deleteTodos(todoIndex)
          }}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          </div>
          {/* <p className="due-date">
            {isDone ?  "donedate" : "duedate"}
          </p> */}
        </div>
      </li>
    </>
  )
}

export default ToDoCard