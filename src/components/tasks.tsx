import { FC, useState } from 'react';
import { useAppSelector, useAppDispatch} from '../app/hooks';
import {
    selectTasks,
    deleteTask,
    editTask,
    task
} from '../features/task/tasksSlice';

const Tasks:FC = () => {
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<string>("");
    

    const handleEdits = (task:task, newContent:string|undefined = undefined, finished = false)=>{
    
        if (newContent === undefined) {
          //look for task, and make it editable
          dispatch(editTask({...task, editable: true}));
           
        }else{
          //task got edited
          //change editable, and comment
            if(finished){ 
                dispatch(editTask({...task, comments: newContent, editable: false}));
            }else{
                dispatch(editTask({...task, comments: newContent, editable: true}));
            }
          
        }
    
      }

      

      const getFiltered = (): task[] => {

        return tasks.filter(task=> Object.values(task).reduce((prev, curr) => prev + curr ,"").toLowerCase().includes(filter.toLowerCase()));

      }
   
    return (  
        <div className="table-responsive text-center">
            <h2>My Current Tasks</h2>
            <div className='col-lg-6 text-start'>
                <label><span className="fs-3">Filter tasks: </span>
                    <input className="me-2" value={filter} onChange={(e)=>{setFilter(e.target.value)}} type="search" placeholder="Search Pics" id="search" aria-label="Search"/>
                    </label>
            
            </div>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Comments</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {getFiltered().map(task=>{
                    
                    return (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        {/* doing some conditional to maybe edit it. */}
                        { task.editable ? 
                                        <td><input type='text' 
                                            value={task.comments} 
                                            onChange={(e:any)=>handleEdits(task, e.target.value, false)}
                                            autoFocus={true}
                                            onBlur={(e:any) => handleEdits(task, e.target.value, true)}
                                        /></td>
                                        : <td onClick={()=>handleEdits(task)}>{task.comments}</td> 
                         }
                        
                        <td><button onClick={()=>dispatch(deleteTask(task.id))} className="btn btn-outline-success">Done</button></td>
                    </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

export default Tasks;