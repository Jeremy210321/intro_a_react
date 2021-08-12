import React, { useState } from "react";
import "../styles/users.css";
const initialUsers = [
  { id: 1, name: "Jeremy", lastname: "León" },
  { id: 2, name: "Domenika", lastname: "León" },
  { id: 3, name: "Diego", lastname: "León" },
];
const Users = () => {
  // const state = useState("estado inicial")
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(null);

  const handleAddUser = () => {
    console.log("handleAddUser");
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;

    if (name === "" || lastname === "") {
      // alert("Ingrese los datos");
      setError("Ingrese todos los campos");
      return;
    }

    const regex = /[0-9]/;
    const containsNumber = regex.test(name + lastname);

    if (containsNumber) {
      setError("Los campos no pueden contener números");
      return;
    }
    setError(null);
    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";

    const newUser = {
      id: users.length + 1,
      name,
      lastname,
    };
    // let newUsers = [];
    // users.forEach((user, index) => {
    //   newUsers[index] = user;
    // });

    const newUsersList = [...users, newUser];
    setUsers(newUsersList);
  };

  return (
    <div>
      <h1>Crear nuevo usuario </h1>
      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" id="lastname" />
        </div>
        {error && <div className="error">{error}</div>}

        <div>
          <button onClick={handleAddUser}>Agregar usuario</button>
        </div>
      </div>
      <h1>Lista de usuarios ({users.length} usuarios)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}. {user.name} {user.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
