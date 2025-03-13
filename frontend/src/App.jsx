import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Cart } from './components/pages/Cart'
import { ProductLayout } from './components/pages/ProductLayout'
import { SignUp } from './components/auth/SignUp'
import { Login } from './components/auth/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: "/productinfo",
        element: <ProductLayout />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      }, 
    ]

  }
  
])
export const App = () => {
  return (
    <RouterProvider router={router}>
      <h1>hello</h1>
    </RouterProvider>
  );
}