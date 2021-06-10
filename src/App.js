import { useState } from "react";

function App() {
  const [posicioActual, setPosicioActual] = useState({
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
  });
  const moureGlobus = () => {
    setTimeout(() => {
      setPosicioActual({
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
      });
    }, 300);
  };
  const [marcador, setMarcador] = useState(0);
  return (
    <>
      <p>Marcador: {marcador} punts</p>
      <i
        className="globo fab fa-fly"
        onMouseOver={moureGlobus}
        onClick={() => setMarcador(marcador + 1)}
        style={{ top: posicioActual.y, left: posicioActual.x }}
      ></i>
    </>
  );
}

export default App;
