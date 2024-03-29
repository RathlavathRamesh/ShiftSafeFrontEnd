import React from 'react'
import Body from './components/Body'
import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Loginpages from './components/Loginpages'
import Signup from './components/Signup'
import Adminpanel from './components/Adminpanel'
import AddUser from './components/AddUser'
import Trackingdata from './components/Trackingdata'
import AdminLogin from './components/AdminLogin'
import TrackShipment from './components/TrackShipment'
function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/userLogin',
        element: <Loginpages />,
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/admin',
        element: <Adminpanel />,
      },
      {
        path: '/admin/adduser',
        element: <AddUser />,
      },
      {
        path: '/browse/tracking',
        element: <Trackingdata />,
      },
      {
        path: '/AdminLogin/',
        element: <AdminLogin />,
      },
      {
        path: '/trackingShipment',
        element: <TrackShipment />,
      },
    ],
  },
])

export default App