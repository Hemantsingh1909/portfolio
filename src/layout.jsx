// layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Outlet /> {/* This renders the current route's component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
