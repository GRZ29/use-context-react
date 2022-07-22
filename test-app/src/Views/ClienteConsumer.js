import React from "react";
import { Context } from ".././Context/Context";
import { useContext } from "react";

const ClienteConsumer = () => {
  //const data = useContext(Context);
  
  const {data, setData} = useContext(Context);

  // return (<div>
  //   {data[0].nombre}
  //   <input
  //       name="nombre"
  //       onChange={(e) => {
  //         const { name, value } = e.target;
  //         data[1]({ ...data[0], [name]: value });
  //         console.log("data",data[0])
  //       }}
  //       ></input>
  //   </div>)

  return (
    <div>
        {data.nombre}
        <input
        name="nombre"
        onChange={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
          console.log("data",data)
        }}
        ></input>
    </div>
    )
};

export default ClienteConsumer;
