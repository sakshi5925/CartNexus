import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Cart } from './components/pages/Cart'
import { ProductLayout } from './components/pages/ProductLayout'
import { SignUp } from './components/auth/SignUp'
import { Login } from './components/auth/Login'
import { Shopping } from './components/pages/Shopping'
import { Address } from './components/pages/address'
import { Payment } from './components/pages/payment'
import { OrderDetails } from './components/pages/orderdetails'

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
        element: <Cart />,
        children:[
          {path:'address',element:<Address/>},
          {path:'payment',element:<Payment/>},
          {path:'orderdetails',element:<OrderDetails/>}
        ]
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
      {
        path: `/shopping/:id`,
        element: <Shopping />
      }
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