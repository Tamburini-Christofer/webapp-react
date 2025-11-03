import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <header className="bg-dark text-white py-3 mb-4">
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
