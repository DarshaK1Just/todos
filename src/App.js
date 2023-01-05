import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo !!", todo);
    //Delete not work in this way
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const [todos, setTodos] = useState( [
    {
      sno: 1,
      title: "Go to PVR",
      desc: "You need to go PVR to watch Movies "
    },
    {
      sno: 2,
      title: "Go to Hostel",
      desc: "You need to go Hostel for sleep "
    },
    {
      sno: 3,
      title: "Go to College",
      desc: "You need to go college for nothing "
    }
  ]);
  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
