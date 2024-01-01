// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reducers/todo/todoSlice";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
function Todos({ setEditedText }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // ! delete function with message
  const deleteItem = (todo) => {
    dispatch(removeTodo(todo.id));
    toast.success("Item deleted !!");
  };



  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex space-x-2">
              {/* Edit Button */}
              <button
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                onClick={() => {
                  // Your edit logic here
                  setEditedText(todo);
                  console.log("Edit button clicked for:", todo.text);
                }}
              >
                <CiEdit fontSize={28} />
              </button>

              {/* Delete Button */}
              <button
                onClick={() => {
                  deleteItem(todo);
                }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <MdDelete fontSize={28} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
