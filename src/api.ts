import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
    try {
        const res = await fetch(`http://localhost:3001/tasks`, {
            cache: "no-store",
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const todos = await res.json();
        return todos;
    } catch (error) {
        console.error("Failed to fetch todos:", error);
        return []; // エラー時には空の配列を返す
    }
};

export const addTodo = async (todo:Task): Promise<Task[]> => {
    try {
        const res = await fetch(`http://localhost:3001/tasks`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(todo),
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const newTodos = await res.json();
        return newTodos;
    } catch (error) {
        console.error("Failed to fetch newTodos:", error);
        return []; // エラー時には空の配列を返す
    }
};
