import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';  // ✅ Import Login

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />  // ✅ Use RouterProvider to enable routing
  );
};

export default App;
