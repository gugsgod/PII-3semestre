import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./AdicionarPessoas.css"

function AdicionarPessoas() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem('tipoUsuario');

  useEffect(() => {
    if (tipo !== 'coordenacao') {
      navigate('/');
    }
  }, [tipo, navigate]);

  return (
    <div className="adicionar-page">
      <div className="adicionar-box">
        <div className="adicionar-title">
          Adicionar Pessoas
        </div>
        <form action="">
          <label htmlFor="">Nome:</label>
          <input 
            type="text" 
          />
          <label htmlFor="">E-mail:</label>
          <input 
            type="email" 
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}

export default AdicionarPessoas