
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom, { Route, Routes } from 'react-router-dom';
// import {User} from './user';
import Users from './fetchUser';
import User from './userInfo';
// import Posts from './Router';
// import Categories from './catigories'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Users />,
        },

        {
            path: "/:id",
            element: <User />,
        },
    ])

    return (<>
        {/* <RouterProvider router={router} /> */}
        <Routes>
            <Route path="/" element ={<Users/>}/>
            <Route path="/:id" element ={<User/>}/>
        </Routes>
       
        {/* <Categoria /> */}
         {/* <Categories/>
        <Posts /> */}
       
    </>

    )
}


