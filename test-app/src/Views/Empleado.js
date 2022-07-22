import React from 'react';
import { Context } from ".././Context/Context";

const Empleado = () => {
  // return (
  //   <div>
  //     <Context.Consumer>
  //       {(data) => (
  //         <div>
  //           {data[0].nombre}
  //         </div> 
  //       )}
  //     </Context.Consumer>
  //   </div>
  // );

  return (
    <div>
      <Context.Consumer>
        {({data}) => (
          <div>
            {data.nombre}
          </div> 
        )}
      </Context.Consumer>
    </div>
  );
};

export default Empleado;