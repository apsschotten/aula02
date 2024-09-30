import { useEffect, useState } from "react";

export default function App() {
  
  const [user, setUser] = useState({});

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
        <li>Gênero: {user?.resposta[0].gender}</li>
        <li>Nome: {user?.resposta[0].name}</li>
        <li>Endereço: {user?.resposta[0].location}</li>
        <li>E-mail: {user?.resposta[0].email}</li>
        <li>Login: {user?.resposta[0].login}</li>
        <li>Info: {user?.resposta[0].info}</li>
      </ul>
    </>
  );
}
