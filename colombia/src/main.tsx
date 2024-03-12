// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Modules
import Login from "./routes/access/Login"
import Register from "./routes/access/Register"
import Map from "./routes/map/Map"
import Map_Level from './routes/map/Map_Level'

// Create a router (paths are relative to the root of the project)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/map/:levelName",
    element: <Map_Level />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
