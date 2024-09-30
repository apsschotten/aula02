import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(photo => (
          <li key={photo.id}>
            <h2>{photo.title}</h2>
            <img src={photo.image} alt={photo.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
