import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { AboutUs } from './pages/AboutUs';
import { Logement } from './pages/Logement';
import { NoMatch } from './pages/NoMatch';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './components/styles/components.css'
import "./pages/styles/style.css"

const router = createBrowserRouter([
  {
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
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main className='container'>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
);