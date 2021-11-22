import { FC, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch} from '../app/hooks';
import {
    selectTaskCount
} from '../features/task/tasksSlice';
import {
    selectLogin,
    logUser,
    logoutUser,
    UserState
  } from '../features/auth/authSlice';

const Header:FC = () => {
    const navigate = useNavigate();
    const taskCount = useAppSelector(selectTaskCount);
    const login = useAppSelector(selectLogin);
    const dispatch = useAppDispatch();
    const [search, setsearch] = useState("")
    
    const newUser = {
        login: true,
        user: {
            name: "alan",
            age: 26,
            email: "alan@alan.com"
        },
    }

    const handleSubmit:React.FormEventHandler<HTMLFormElement> | undefined = (e)=>{
        e.preventDefault();
        //send to our app, so they can update the state.
        // document.getElementById('search').value;
    }

    

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">ReactDemo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/post/4567?name=alan&last=cont">Posts, urlparams</NavLink>
                </li>
                
            </ul>

            <Link to="/tasks/tasks">
                <button type="button" className="btn btn-primary m-2">
                        Tasks <span className="badge bg-secondary">{taskCount}</span>
                </button>
            </Link>
                
            <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" value={search} onChange={(e)=>setsearch(e.target.value)}placeholder="Search Pics" id="search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-success my-2" onClick={()=>{login?dispatch(logoutUser()): dispatch(logUser(newUser))}}>{login?"logout":"login"}</button>
            </div>
        </div>
        </nav>
    </>);
}

export default Header;