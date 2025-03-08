import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./components/Pricing";
import Contact from "./pages/Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },  // ✅ Ensure paths start with "/"
      { path: "/services", element: <Services /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
]);

export default router;
