function TodoContentY(props) {
  return (
    <div className="TodoContentY">
      <span>제목 : </span>
      <h3>{props.todo.title}</h3>

      <p>
        <span>내용 : </span>
        {props.todo.content}
      </p>
      <button
        className="detR"
        onClick={() => {
          props.handleDelete(props.todo.id);
        }}
      >
        삭제하기
      </button>
      <button
        className="detG"
        onClick={() => {
          props.handleUpdate(props.todo.id);
        }}
      >
        완료하기
      </button>
    </div>
  );
}
export default TodoContentY;
