import React, {FC } from 'react';
import uniqid from 'uniqid';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import {
  addTask,
  task,
} from '../features/task/tasksSlice';
import { useForm } from './hooks/useForm';

const Form:FC = () =>{

    const [values, handleChange] = useForm({title: "", comments: ""});

    // const [title, setTitle] = useState<string>();
    // const [comments, setComments] = useState<string>();
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
    

    const handleSubmit:React.FormEventHandler<HTMLFormElement> | undefined = (e)=>{
        e.preventDefault();
        console.log(e);
        //in this case no validation required. just use required on the form
        const task:task = {
            id: uniqid(),
            title: values.title,
            comments: values.comments,
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
                <input type="text" value={values.title} onChange={handleChange} name="title" required className="form-control"/>
                <br/>
                <label>
                    Comments:      
                </label>     
                <input type="text" value={values.comments} onChange={handleChange} name="comments" required className="form-control"/>         
                <br/>
                <button type="submit" className='btn btn-success btn-lg'>Add</button>
            </form>
        </div>

    );
}

export default Form;