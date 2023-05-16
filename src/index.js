import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUs';
import { Logement } from './pages/Logement';
import { NoMatch } from './pages/NoMatch';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './components/styles/components.css'
import "./pages/styles/style.css"

const router = createBrowserRouter([
  {
    element:
      <>
        <Header />
        <main className='container'>
          <Outlet />
        </main>
        <Footer />
      </>
    ,
    children: [{
      path: "/",
      element: <Homepage />
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/logement/:id",
      element: <Logement />
    },
    {
      path: "*",
      element: <NoMatch />
    }]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >
);