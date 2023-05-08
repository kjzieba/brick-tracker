import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CustomSets from './pages/CustomSets/CustomSets';
import CustomSet from './pages/CustomSet/CustomSet';
import AddCustomSet from './pages/AddCustomSet/AddCustomSet';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/custom-sets',
        element: <CustomSets/>
    },
    {
        path: '/custom-sets/:id',
        element: <CustomSet/>
    },
    {
        path: '/add-set',
        element: <AddCustomSet/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
