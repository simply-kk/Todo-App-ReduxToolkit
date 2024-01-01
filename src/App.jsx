import { useState } from "react";
import  { Toaster } from 'react-hot-toast';

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";





function App() {

const [editedText, setEditedText] = useState(null) 


  return (
    <>
      <Toaster />
      <AddTodo editedText = {editedText} setEditedText = {setEditedText} />
      <Todos setEditedText = {setEditedText} />
    </>
  );
}

export default App;
