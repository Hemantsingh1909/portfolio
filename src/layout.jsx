// layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Add meta viewport tag to ensure proper mobile scaling
  useEffect(() => {
    // Ensure viewport meta tag exists and is properly configured
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      document.head.appendChild(viewportMeta);
    }

    // Set viewport for optimal display on all device sizes including tablets
    viewportMeta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover";

    // Function to handle scrolling to top on route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <main className="flex-grow">
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
