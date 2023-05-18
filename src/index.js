import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/Homepage/Homepage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Logement } from './pages/Logement/Logement';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './index.css'
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