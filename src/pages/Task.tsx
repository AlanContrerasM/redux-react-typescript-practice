import { useEffect, FC } from "react";
import { NavLink, Routes, Route} from "react-router-dom";
import Form from "../components/formTask";
import Tasks from "../components/tasks";

const Task:FC = () => {

    useEffect(()=>{
        window.scroll(0,0);
    }, []);


    return ( <>
            <h1>Tasks Page</h1>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={`tasks`}>All Tasks</NavLink>

                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`addTask`}>Add</NavLink>
                    </li>
                    
                    
                </ul>

                <Routes>
                    <Route path={`/tasks`}  element={<Tasks/>}/>
                    <Route path={`/addTask`} element={<Form/>}/>
                </Routes>
                
            </div>
            
        </>
        
     );
}

export default Task;