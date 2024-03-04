import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import MainPage from './pages/main/main_page.tsx'
import ErrorPage from './pages/error/error.tsx'
import NewsPage from './pages/news/news.tsx'
import LoginPage from './pages/login/login.tsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    
  },
  {
    path: "/news",
    element: <NewsPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)