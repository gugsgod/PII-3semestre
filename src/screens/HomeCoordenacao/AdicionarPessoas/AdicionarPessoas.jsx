import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdicionarPessoas() {
  const navigate = useNavigate();
  const tipo = localStorage.getItem('tipoUsuario');

  useEffect(() => {
    if (tipo !== 'adicionar_pessoas') {
      navigate('/');
    }
  }, [tipo, navigate]);

  return (
    <div>teste</div>
  )
}

export default AdicionarPessoas