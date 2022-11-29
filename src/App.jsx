import React, { useState } from "react";

import "./App.css";
import CustomButton from "./components/Button";
import TodoContentD from "./components/TodoContentD";
import TodoContentY from "./components/TodocontentY";

//컴포넌트 모아놓은 곳

// 버튼 컴포넌트

// 버튼 컴포넌트

function App() {
  // 자바스크립트 작성하는 곳

  const [todos, setTodos] = useState([
    { id: 1, title: "잘하자~!", content: "열심히 하겠습니다.", done: true },
    {
      id: 2,
      title: "못해도 해!",
      content: "저는 열심히 못합니다.",
      done: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addUserHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      title: title,
      content: content,
      done: false,
    };
    setTodos([...todos, newTodos]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const updateTodoHandler = (id) => {
    const targetIdx = todos.findIndex((todo) => todo.id === id);
    const temp = [...todos];
    temp[targetIdx] = { ...temp[targetIdx], done: true };
    setTodos(temp);

    //temp[해당 인덱스 찾는 함수]
  };

  const cancelTodoHandler = (id) => {
    const targetIdx = todos.findIndex((todo) => todo.id === id);
    const temp = [...todos];
    temp[targetIdx] = { ...temp[targetIdx], done: false };
    setTodos(temp);
  };

  console.log(todos);

  // 인덱스 리턴하는 곳
  return (
    <div>
      <section className="inner">
        <div className="logo">
          <h2>👸리액트 기초 다지기👸</h2>
          <h2>MY TodoList</h2>
        </div>
      </section>
      <section className="inner contentUp">
        <p>제목:</p>
        <input
          value={title}
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          onChange={(todo) => setTitle(todo.target.value)}
        />
        <p>내용:</p>
        <input
          value={content}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
          onChange={(todo) => setContent(todo.target.value)}
        />
        <CustomButton
          width="200px"
          height="50px"
          margin="0 auto"
          border="none"
          color="blue"
          borderRadius="30px"
          onClick={addUserHandler}
        >
          추가하기
        </CustomButton>
      </section>

      <section className="inner2">
        <h2>😎 이거 해야 함!!!</h2>
        <article className="TodoContentAll">
          {todos.map((todo) => {
            if (todo.done === false) {
              return (
                <TodoContentY
                  handleDelete={deleteTodoHandler}
                  handleUpdate={updateTodoHandler}
                  todo={todo}
                  key={todo.id}
                ></TodoContentY>
              );
            } else {
              return null;
            }
          })}
        </article>
      </section>

      <section className="inner2">
        <h2>😭이거 다 했음</h2>
        <article className="TodoContentAll">
          {todos.map((todo) => {
            if (!todo.done === false) {
              return (
                <TodoContentD
                  handleDelete={deleteTodoHandler}
                  handleCancel={cancelTodoHandler}
                  todo={todo}
                  key={todo.id}
                ></TodoContentD>
              );
            } else {
              return null;
            }
          })}
        </article>
      </section>
    </div>
  );
}
export default App;
