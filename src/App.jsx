import React, { useState } from "react";

import "./App.css";
import CustomButton from "./components/Button";
import TodoContentD from "./components/TodoContentD";
import TodoContentY from "./components/TodocontentY";

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
  const [id, setId] = useState(3);
  const addUserHandler = () => {
    setId(id + 1);
    const newTodos = {
      id: id,
      title: title,
      content: content,
      done: false,
    };
    if (newTodos.content.trim() === "" || newTodos.title.trim() === "") {
      alert("칸을 채워주세요!!");
    } else {
      setTodos([...todos, newTodos]);
      setTitle("");
      setContent("");
    }

    // 배열에 [] 다가 전개연산자를 앞에 두고, 뒤에 변경될 상수 혹은 변수를 넣어두면, 변경된 부분만 덮어써서 보여줌.
  };

  const deleteTodoHandler = (id) => {
    //id값을 데이터 구조에서 받아와서 deleteTodoHandler 함수 안에서 속성을 사용할 수 있음.
    const newTodoList = todos.filter((todo) => todo.id !== id);
    //찾은 것들의 아닌 것만 보여주는 것. 즉 1,2,3,4,5 중에 4번을 찾으면 1,2,3,5를 보여줌.
    setTodos(newTodoList);
  };

  const doneTodoHandler = (id) => {
    const targetIdx = todos.findIndex((todo) => todo.id === id);
    //배열을 돌면서 값을 기준으로 일치되는 값을 찾고, 그에 해당하는 인덱스를 반환함.
    const temp = [...todos];
    temp[targetIdx] = { ...temp[targetIdx], done: !temp[targetIdx].done };
    //그냥 todo[targetIdx]으로 할 수 있지만, 배열의 값을 불변성을 유지하기 위하여
    // 'temp[targetIdx] = { ...temp[targetIdx], done: !temp[targetIdx].done }'; 이런 식으로 새로운 배열로 복사함..
    setTodos(temp);

    //temp[targetIdx] = {..........} -> 배열의 인덱스의 값을 바꿔 주는 것
  };

  console.log(todos);

  // 인덱스 리턴하는 곳
  return (
    <div className="App">
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
          // 인풋 이벤트로 들어온 입력 값을 title의 값으로 업데이트
          onChange={(todo) => setTitle(todo.target.value)}
          autofocus
        />
        <p>내용:</p>
        <input
          value={content}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 content의 값으로 업데이트
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
                  handledone={doneTodoHandler}
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
                  handledone={doneTodoHandler}
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
