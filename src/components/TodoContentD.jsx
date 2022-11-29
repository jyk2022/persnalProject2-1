function TodoContentD(props) {
  return (
    <div className="TodoContentD">
      <span>제목 : </span>
      <h3> {props.todo.title}</h3>

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
          props.handleCancel(props.todo.id);
        }}
      >
        취소하기
      </button>
    </div>
  );
}
export default TodoContentD;