import "./global.scss"
import { useState } from "react";


export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };
  return(
    <main>
      <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
      <img src={ lampada
            ? "./src/assets/lampada-com-mago.png"
            : "./src/assets/lampada.png"} alt="lâmpada" />
      <button onClick={trocarLampada}>Clique Aqui</button>
    </main>
  );
}