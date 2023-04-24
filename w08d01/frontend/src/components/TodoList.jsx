import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    // return <TodoListItem id={todo.id} task={todo.task} completed={todo.completed} />;
    return <TodoListItem key={todo.id} {...todo} />;
  });

  return (
    <div>
      <h2>This is great!!!</h2>
      {mappedTodos}
    </div>
  );
};

export default TodoList;
