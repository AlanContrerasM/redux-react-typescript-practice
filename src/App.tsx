import { FC, useState } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import Task from './pages/Task';
import { useAppSelector} from './app/hooks';
import {
  selectLogin
} from './features/auth/authSlice';




const  App:FC = () => {

  const login = useAppSelector(selectLogin);

  return (
    <div className="App">
      <Header />
      
      
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About name="EventName"/>}/>
        {/* for login and nested stuff */}
        {/* <Route path='/profile/*' element={<Profile login={login}/>}/> */}
        <Route path='/profile/*' element={login?<Profile />: <Navigate to="/"/>}/>
        {/* for params */}
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/tasks/*' element={<Task/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
