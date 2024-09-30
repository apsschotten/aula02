import { useEffect, useState } from "react";

export default function App() {
  
  const [user, setUser] = useState([]);

  useEffect(() => { 
    const receberDadosUser = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUser(dados);
    }
    receberDadosUser();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {user.map(user => (
          <li key={user.id}>
            <img src={user.image} alt={user.name} width={100} />
            <h2>{user.name}</h2>
            <p>{user.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
