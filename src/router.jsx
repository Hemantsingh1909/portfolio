// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './components/Pricing';
import Contact from './pages/Contact';

const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'services', element: <Services /> },
          { path: 'pricing', element: <Pricing /> },
          { path: 'contact', element: <Contact /> }
        ]
      }
    ],
    {
      future: {
        v7_startTransition: true, // Critical fix
        v7_relativeSplatPath: true // Optional but recommended
      }
    }
  );
  
  export default router;