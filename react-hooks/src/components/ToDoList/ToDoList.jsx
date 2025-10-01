import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <ul className="todo-list">
      {props.list.map((item) => {
        return (
          <li key={item.id} style={{ color: "#646cffaa", fontWeight: "bold" }}>
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
