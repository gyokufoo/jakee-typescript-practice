import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./Todo";

function App() {
  type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    console.log("getting todos sample data");
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: TodoType) => {
        return (
          <Todo
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}
          ></Todo>
        );
      })}
    </div>
  );
}

export default App;
