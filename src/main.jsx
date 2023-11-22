import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './Component/Main.jsx';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './Component/Home.jsx';
import OrderReview from './Component/OrderReview.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("tshirt.json")
      },
      {
        path: "review",
        element: <OrderReview />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
