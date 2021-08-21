import React, { useRef, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["a", "b", "c"]);
  const [completed, setCompleted] = useState([]);
  const inputRef = useRef(null);

  const handleAddTask = () => {
    // const newTodo = document.querySelector("#todo").value;
    // setTodos((prevState) => [...prevState, newTodo]);
    // document.querySelector("#todo").value = "";

    const newTodo = inputRef.current.value;
    setTodos((prevState) => [...prevState, newTodo]);
    inputRef.current.value = "";
  };
  const handleDeleteTask = (positionToDelete) => {
    console.log("positionToDelete ", positionToDelete);
    const newTodos = todos.filter((todo, i) => i !== positionToDelete);
    console.log("newTodos", newTodos);
    setTodos(newTodos);
  };

  const handleCompletedTask = (positionToComplete) => {
    console.log("positionToComplete ", positionToComplete);
    const taskToComplete = todos[positionToComplete];
    handleDeleteTask(positionToComplete);
    setCompleted((prevState) => [...prevState, taskToComplete]);
  };

  return (
    <div>
      <div>
        <h1>Lista de tareas</h1>
        <label htmlFor="todo">Nombre de la tarea </label>
        <input type="text" id="todo" ref={inputRef} />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <div>
        <h3>Tareas pendientes</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Eliminar</th>
              <th>Completado</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo, index) => (
              <tr>
                <td>{todo}</td>
                <td>
                  <button onClick={() => handleDeleteTask(index)}>
                    Eliminar
                  </button>
                </td>
                <td>
                  <button onClick={() => handleCompletedTask(index)}>
                    Marcar como completado
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Tareas completadas</h3>

        <ul>
          {completed.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
