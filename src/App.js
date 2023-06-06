import './App.css';

import NavBar from './components/NavBar';

import { useState, useEffect } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

import { useSelector } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {

  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }

  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const theme = useSelector((state) => state.theme.theme);

  console.log(theme)

  return (
    <div 
      style={{width: width, height: height, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme === 'light' ? 'white' : '#383838'}}
      >     

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
