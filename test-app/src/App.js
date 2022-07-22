import "./App.css";
import ClienteConsumer from "./Views/ClienteConsumer";
import { Context } from "././Context/Context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empleado from "./Views/Empleado";
import EmpleadoConsumer from "./Views/EmpleadoConsumer";
import Layout from "./Path/Layout";

function App() {
  const [data, setData] = useState({ nombre: "Gerald" });


  return (
    <div className="App">
      {/* <div>holas</div>
      <input
        name="nombre"
        onChange={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
      ></input> */}

      {/* <Context.Provider value={[data, setData]}> */}
      <Context.Provider value={{data, setData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Empleado />} />
              <Route path="empleadoConsumer" element={<EmpleadoConsumer />} />
              <Route path="empleado" element={<Empleado />} />
              <Route path="clientesConsumer" element={<ClienteConsumer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
