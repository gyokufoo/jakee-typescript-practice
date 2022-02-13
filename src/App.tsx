import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./Todo";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "gyoku",
  hobbies: ["game", "reading books", "movies"],
};

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
      <UserProfile user={user}></UserProfile>
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
