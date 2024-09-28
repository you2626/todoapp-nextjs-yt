"use client";

import { addTodo } from '@/api';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const AddTask = () => {

  const [taskTitle,setTaskTitle] = useState("")

  const hadleSubmit = async (e:FormEvent)=>{
    e.preventDefault();

    await addTodo({id:"4",text: taskTitle})

    setTaskTitle("");
  };
  return (
    <form className="mb-4 space-y-3" onSubmit={hadleSubmit}>
        <input 
        type="text" 
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
        value={taskTitle}
        />
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">Add Task</button>
    </form>
  )
}

export default AddTask;