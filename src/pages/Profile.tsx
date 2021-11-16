import { NavLink, useNavigate, Routes, Route} from "react-router-dom";
import { useEffect, FC } from 'react';
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
import { useAppSelector} from '../app/hooks';
import {
    selectUser,
    selectLogin
  } from '../features/auth/authSlice';

interface Props {
    login?: boolean | string;
}
const Profile:FC<Props> = () => {
    const navigate = useNavigate();
    const login = useAppSelector(selectLogin);
    const user = useAppSelector(selectUser);

    useEffect(() => {
        if(!login){
            navigate("/");//can be -1, 1, etc
            
        }

        //calls api
    }, [login, navigate]);

    

    return ( 
        <>
            <h1>Profile Page</h1>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={`viewProfile`}>View</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`editProfile`}>Edit</NavLink>
                    </li>
                    
                    
                </ul>

                <Routes>
                    <Route path={`/viewProfile`}  element={<ViewProfile name={user.name}/>}/>
                    <Route path={`/editProfile`} element={<EditProfile />}/>
                </Routes>
                
            </div>
        </>
     );
}

export default Profile;