import React from 'react';


const Tecla = ({valor, funcion})=>{
    return (      
         <input className='btn btn-primary text-center' type="button" value={valor} onClick={() => funcion(valor)} 
         style={{width : "40px"}} />
         
      
    );
};

export default Tecla;