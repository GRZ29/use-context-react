import React from "react";
import { Outlet, Link } from "react-router-dom";
import ClienteConsumer from "../Views/ClienteConsumer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empleado">Empleado</Link>
          </li>
          <li>
            <Link to="/empleadoConsumer">EmpleadoConsumer</Link>
          </li>
          <li>
            <Link to="/clientesConsumer">ClientesConsumer</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
