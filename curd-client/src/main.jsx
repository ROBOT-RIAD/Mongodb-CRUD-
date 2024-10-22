import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Users from './Components/Users.jsx'
import Update from './Components/Update.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     
    ],
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  }
  ,
  {
    path:'/update/:id',
    element: <Update></Update>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
