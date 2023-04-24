import './TodoListItem.scss';

// id, task, completed

const TodoListItem = (props) => {
  return (
    <div className="todo-list-item">
      <h2>Task: {props.task} ({props.id})</h2>
      <h3>Completed: { props.completed ? '✅' : '🟩' }</h3>
    </div>
  );
};

export default TodoListItem;
