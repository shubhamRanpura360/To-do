import { IoCheckmarkOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const TodoList = ({ data ,OnHandleDeleteTodo ,checked , OnHandleCheckedTodo , OnHandleEditTodo}) => {
  return (
    <li className="todo-item">
      <span className = {checked ? "checkList" : "notCheckList"} >{data}</span>

      <button className="cheak-btn" onClick={ () => OnHandleCheckedTodo(data) }>
        <IoCheckmarkOutline />
      </button>

      <button className="delete-btn" onClick={() => OnHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
      <button className="edit-btn" onClick={ () => OnHandleEditTodo(data)} >
      <CiEdit/>
      </button>
    </li>
  );
};
