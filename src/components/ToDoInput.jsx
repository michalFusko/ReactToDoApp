
const ToDoInput = (props) => {
  const {updateTodos, newTodos, setNewTodos, searchTerm, setSearchTerm} = props
  

  return (
    <header>
      <div className="input-container">
        <input value={newTodos} type="text" placeholder="Add some todos..." onChange={(e) => {
          setNewTodos(e.target.value)
        }} />
        <input type="date" className="date" />
        <button  className="header-btn"
        onClick={() => {
          updateTodos(newTodos)
          setNewTodos("")
        }}>ADD</button>
      </div>
      <div className="input-container">
        <input  type="text" placeholder="Search or sort todos" onChange={(e) => {
          setSearchTerm(e.target.value)
        }} />
        <button className="header-btn">SORT BY
          <i className="fa-solid fa-circle-chevron-down"></i>
        </button>
      </div>
    </header>
  )
}

export default ToDoInput