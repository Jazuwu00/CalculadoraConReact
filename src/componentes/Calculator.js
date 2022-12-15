import React, { useState, useEffect } from 'react';

import Pantalla from './Pantalla';
import Boton from './Boton';


const Calculator = () => {
    const valores = ['(', ')', 'x!', 'x²', '√', 'ⁿ√', 'sin', 'cos', 'tg', 'x³', '∛', 'xⁿ', '1', '2', '3', '/', '%', 'ln', '4', '5', '6', '*', 'log', 'e', '7', '8', '9', '-', 'AC', '=', '.', '0', 'π', '+', 'MR'];
    const [ant, setAnt] = useState('');
    const [pos, setPos] = useState('');
    const [mr, setMr] = useState('');


    function factorial(n){
      //base case
      if(n == 0 || n == 1){
          return 1;
      //recursive case
      }else{
          return n * factorial(n-1);
      }
  }
    const funcion = (valor) => {
      let calculo = '';
      switch (valor) {
        case 'π':
            setAnt(ant + Math.PI);
            setPos(pos);
            break;
        case 'e':
            setAnt(ant + Math.PI);
            setPos( pos);
            break;
        case 'AC':
          setAnt('');
          setPos('');
          break;
        case 'MR':
          setAnt(mr);
          setPos('');
          break;
        case 'x²':
          setAnt(ant + '**2');
          setPos( pos);
          break;
        case 'x³':
          setAnt(ant + '**3');
          setPos(pos);
          break;
        case 'xⁿ':
          setAnt( ant +"**" );
          setPos( pos);
          break;
        case '√':
          setAnt("Math.sqrt("+ant  );
          setPos(')' + pos);
          break;
        case '∛':
          setAnt('Math.cbrt('+ant);
          setPos(')' + pos);
          break;
        case 'ⁿ√':
          setAnt('Math.cbrt('+ant);
          setPos(')' + pos);
          break;
        case 'sin':
          setAnt("Math.sin("+ant);
          setPos(')' + pos);
          break;
        case 'cos':
          setAnt("Math.cos("+ant);
          setPos(')' + pos);
          break;
        case 'tg':
          setAnt("Math.tan("+ant );
          setPos(')' + pos);
          break;
        case 'ln':
          setAnt("Math.log("+ant);
          setPos(')' + pos);
          break;
        case 'log':
          setAnt("Math.log10("+ant);
          setPos(')' + pos);
          break;
        case 'x!':
          setAnt(factorial(ant))
          setPos( pos);
          break;
        case '=':
          try {
            calculo = eval(ant + pos);
          } catch (error) {
            calculo = "Syntax error";
          }
          setAnt(calculo);
          setPos('');
          setMr(calculo);
          break;
        default:
          setAnt(ant + valor);
      }
    };
    return (
       <div className=" mx-auto  mt-5 bg-dark " style={{width : "400px", height : "370px", padding:"10px"}}>
       
     
        <div className='bg-light m-3 mx-auto 'style={{width : "340px", height : "30px"}}><Pantalla resultado={ant + pos} /></div>
        <div className='row mx-auto mt-2' style={{width : "350px", height : "25px"}}>
            {valores.map(k => <div className="col-2 mb-2 text-center" >
            <Boton valor={k}
          
            funcion={funcion} />

            </div>)}
            </div>
      
       </div>
    );
  

  
}
export default Calculator;