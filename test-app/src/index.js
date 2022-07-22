import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Path/Layout";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cliente from "./Views/Cliente";
import ClienteConsumer from "./Views/ClienteConsumer";
import Empleado from "./Views/Empleado";
import EmpleadoConsumer from "./Views/EmpleadoConsumer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Empleado/>}  component={Empleado}/>
          <Route path="empleado" element={<Empleado/>} component={Empleado}/>
          <Route path="empleadoConsumer" element={<EmpleadoConsumer/> } component={EmpleadoConsumer }/>
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
