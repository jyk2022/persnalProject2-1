function TodoContentD(props) {
  const { todo } = props;
  return (
    <div className="TodoContentD">
      <span>제목 : </span>
      <h3> {todo.title}</h3>

      <p>
        <span>내용 : </span>
        {todo.content}
      </p>
      <button
        className="detR"
        onClick={() => {
          props.handleDelete(todo.id);
        }}
      >
        삭제하기
      </button>
      <button
        className="detG"
        onClick={() => {
          props.handledone(todo.id);
        }}
      >
        취소하기
      </button>
    </div>
  );
}
export default TodoContentD;
