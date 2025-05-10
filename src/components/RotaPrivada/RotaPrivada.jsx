import { Navigate } from 'react-router-dom';

function RotaPrivada({ tipoEsperado, children }) {
  const tipo = localStorage.getItem('tipoUsuario');

  // Se não estiver logado ou for outro tipo, redireciona para login
  if (tipo !== tipoEsperado) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RotaPrivada;
