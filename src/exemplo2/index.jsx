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
          <li>Título: {user?.resposta[0].title}</li>
          <img src={user?.resposta[0].thumbnailUrl} alt={user?.resposta[0].title} width={100} />
        ))}
      </ul>
    </>
  );
}
