import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Exponent from "./components/Exponent";


function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent num={count} exponent={2}/>
        <Exponent num={count} exponent={3}/>
        <Exponent num={count} exponent={4}/>
        <Exponent num={count} exponent={5}/>
        <Exponent num={count} exponent={6}/>
      </div>
    </div>
  );
}

export default App;
