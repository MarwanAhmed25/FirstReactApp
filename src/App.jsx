import { useState } from 'react'
import './App.css'

import { Outlet, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

let routeres = createBrowserRouter([
  {path: "FirstReactApp", element: <Layout/>, children:[
    {index:true, element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
  ]},
  
]);


function App() {

  return <RouterProvider router={routeres}></RouterProvider>
  
}

export default App
