/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../reducers/todo/todoSlice";
import toast from "react-hot-toast";

function AddTodo({ editedText, setEditedText }) {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editedText !== null) {
      setIsEdit(true);
      setInput(editedText.text);
    }
  }, [editedText]);

  const addTodoHandler = (e) => {
    console.log("add also triggered");
    if (input.length === 0) {
      e.preventDefault();
      toast.error("empty input is not allowed");
      return;
    } else {
      e.preventDefault();
      dispatch(addTodo(input));

      //! used for show notification
      toast.success("Todo Saved !!");
      setInput("");
    }
  };

  // ! for update/Edit logic
  const editTodo = (todo) => {
    if (input == "") {
      dispatch(removeTodo(todo.id));
      setInput("")
      toast.success("Item Deleted");
      
    } else {
      const updatedTodo = {
        id: todo.id,
        text: input,
      };

      dispatch(updateTodo(updatedTodo));
      setInput("");
      toast.success("Item Updated !!")
    }
      setEditedText(null);

      setTimeout(() => {
        setIsEdit(false);
      }, 20);
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {!isEdit ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      ) : input == "" ? (
        <button
          type="button"
          onClick={() => {
            editTodo(editedText);
          }}
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Delete Todo
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            editTodo(editedText);
          }}
          className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Update Todo
        </button>
      )}
    </form>
  );
}

export default AddTodo;
