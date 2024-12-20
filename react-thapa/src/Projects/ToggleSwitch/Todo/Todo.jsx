import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStoregeTodoData,
  setLocalStoregeTodoData,
} from "./TodoLocalStorege";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStoregeTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // to check if the input field is empty or not
    if (!content) return;

    // to check if the data is already existing or not

    // if (task.includes(inputValue)) {
    //   return;
    // }
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // todo add data to localstorege
  setLocalStoregeTodoData(task);

  //  todo edit button function
  const HandleEditTodo = (task, value) => {
    console.log(task);
    console.log(value);
  };

  //  todo handleDeleteTodo Function
  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);

    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // Clear All Data todo Functionality
  const handleTodoClearData = () => {
    setTask([]);
  };

  //todo handleCheckedTodo Functionality
  const handleCheckedTodo = (content) => {
    const updateTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updateTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm OnAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                OnHandleDeleteTodo={handleDeleteTodo}
                OnHandleCheckedTodo={handleCheckedTodo}
                OnHandleEditTodo={HandleEditTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleTodoClearData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
