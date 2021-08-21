import React from "react";
import Users from "./Users";
import TodoList from "./TodoList";

function App({ name, lastname, age, subjects, ...props }) {
  // console.log("PROPS", props);
  // const { name, lastname, age, subjects } = props;
  const arr1 = [1, 2, 4];
  const arr2 = [2, 4, 5];
  const arr3 = arr1.map((x, index) => x + arr2[index]);
  // console.log(arr3);
  return (
    <>
      <div className={"greeting"}>
        Hola {name} {lastname}
      </div>
      <div className={"age"}>Edad: {age}</div>
      <div>Subjects:</div>
      <ul>
        {subjects.map((subject, index) => {
          // let translation;
          // if (subject === "ddi") {
          //   translation = "Diseño de interfaces";
          // } else if (subject === "fdsw") {
          //   translation = "Fundamentos de desarrollo de software";
          // } else {
          //   translation = subject;
          // }
          // return <li>{translation}</li>;
          return <li key={index}>{subject}</li>;
        })}
      </ul>
      <ul>
        {arr3.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
      <Users />
      <TodoList />
    </>
  );
}

export default App;
