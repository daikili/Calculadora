import React , {useState} from 'react';
import './App.css';
function App() {
  const [result,setResult] = useState("");

  const handleClick = (e) => {
      setResult(result.concat(e.target.name));

      console.log(result)
  }
  
  const clear = () =>{
      setResult("");
  }


  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }catch(err)
    {
      setResult("Error");
    }
  }

  return (
    <div className="container">
    <div className="calculadora">
      <h1 id="display">{result}</h1>
      <button onClick={clear} id="clear">AC</button>
      {/*<button onClick={backspace} id="backspace">C</button>*/}
      <button name="/" id="divide" onClick={handleClick}>/</button>
      <button name="*" id="multiply" onClick={handleClick}>x</button>
      <button name="7" id="seven" onClick={handleClick}>7</button>
      <button name="8" id="eight" onClick={handleClick}>8</button>
      <button name="9" id="nine" onClick={handleClick}>9</button>
      <button name="-" id="subtract" onClick={handleClick}>&ndash;</button>
      
      <button name="4" id="four" onClick={handleClick}>4</button>
      <button name="5" id="five" onClick={handleClick}>5</button>
      <button name="6" id="six" onClick={handleClick}>6</button>
      <button name="+" id="add" onClick={handleClick}>+</button>

      <button name="1" id="one" onClick={handleClick}>1</button>
      <button name="2" id="two" onClick={handleClick}>2</button>
      <button name="3" id="three" onClick={handleClick}>3</button>

      <button name="0" id="zero" onClick={handleClick}>0</button>
      <button name="." id="decimal" onClick={handleClick}>.</button>
      <button name="=" id="equals" onClick={calculate}>=</button>
    </div>
    </div>
  );
}

export default App;
