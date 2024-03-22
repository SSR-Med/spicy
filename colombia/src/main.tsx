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
import Home from "./routes/home/Home"
import Gacha from "./routes/gacha/Gacha"
import Prize from "./routes/gacha/Prize"
import Team from "./routes/team/Team"
import Card from "./routes/team/Card"
import Configuration from "./routes/configuration/Configuration"
import { ChangePassword } from './routes/configuration/ChangePassword'
import ChangeCard from './routes/configuration/ChangeCard'
import ChangeUser from './routes/configuration/ChangeUser'
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
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/gacha",
    element: <Gacha />,
  },
  {
    path: "/gacha/:idGacha",
    element: <Prize />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/team/:cardName",
    element: <Card />,
  },
  {
    path: "/configuration",
    element: <Configuration />,
  },
  {
    path: "/configuration/pass",
    element: <ChangePassword />,
  },
  {
    path: "/configuration/cards",
    element: <ChangeCard />,
  },
  {
    path: "/configuration/accounts",
    element: <ChangeUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
