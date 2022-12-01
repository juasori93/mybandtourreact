import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Main from '../pages/Main';
import Home from '../pages/Home';


const router = createBrowserRouter([
    {
        path : '/', element : <Main />
    },
    {
        path : '/Login', element : <Login />
    },
    {
        path : '/Signup', element : <Signup />
    },
    {
        path : '/Home', element : <Home />
    },

]);

export default router;