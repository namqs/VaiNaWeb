import "./styles.css";
import { useState } from "react";

export default function App() {
  const [numero, setNumero] = useState(0);

  const decrement = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  const increment = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };

  return (
    <div id="div0">
      <div id="div1">
        <h1>{numero}</h1>
        <div id="div2">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
      <h1>Feito por Natalie Marques :)</h1>
    </div>
  );
}
