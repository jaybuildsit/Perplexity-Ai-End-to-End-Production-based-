import { createBrowserRouter, Navigate } from 'react-router'
import Login from '../features/auth/pages/Login';
import Register from '../features/auth/pages/Register';
import Dashboard from '../features/chat/pages/dashboard';
import Protected from '../features/auth/components/Protected';
// import { Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: "/",
    element: <Protected>
      <Dashboard />
    </Protected>
  },
  {
    path: '/dashboard',
    element: <Navigate to='/' replace />
  }



])