import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 
    const buscarFotos  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarFotos();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(foto => (
          <li key={foto.id}>
            <h2>{foto.title}</h2>
            <img src={foto.url} alt={foto.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
