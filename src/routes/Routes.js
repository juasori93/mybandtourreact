import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const router = createBrowserRouter([
    {
        path : '/', element : <Login />
    },
    {
        path : '/Signup', element : <Signup />
    },
]);

export default router;