import React, { useState, FC } from 'react';
import uniqid from 'uniqid';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import {
  addTask,
  task,
} from '../features/task/tasksSlice';

const Form:FC = () =>{
    const [title, setTitle] = useState<string>();
    const [comments, setComments] = useState<string>();
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
    

    const handleSubmit:React.FormEventHandler<HTMLFormElement> | undefined = (e)=>{
        e.preventDefault();
        console.log(e);
        //in this case no validation required. just use required on the form
        const task:task = {
            id: uniqid(),
            title: title,
            comments: comments,
            editable: false,
        }
        //send to store to add
        dispatch(addTask(task));
        navigate('/tasks/tasks');
        
    }

    return ( 
        <div className="form-group container border p-2 my-2">
            <h1 className='text-center'>Add New Task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                </label>
                <input type="text" value={title||""} onChange={(e)=>{setTitle(e.target.value)}} required className="form-control"/>
                <br/>
                <label>
                    Comments:      
                </label>     
                <input type="text" value={comments||""} onChange={(e)=>{setComments(e.target.value)}} required className="form-control"/>         
                <br/>
                <button type="submit" className='btn btn-success btn-lg'>Add</button>
            </form>
        </div>

    );
}

export default Form;