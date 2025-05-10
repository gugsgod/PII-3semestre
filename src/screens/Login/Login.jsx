import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    const emailLower = email.toLowerCase();

    if (emailLower === 'coordenacao@seudominio.com' && senha === '123') {
      localStorage.setItem('tipoUsuario', 'coordenacao');
      navigate('/coordenacao');
      return;
    }

    if (emailLower.endsWith('@sistemapoliedro.com.br') && senha === '123') {
      localStorage.setItem('tipoUsuario', 'professor');
      navigate('/professor');
      return;
    }

    if (emailLower.endsWith('@p4ed.com') && senha === '123') {
      localStorage.setItem('tipoUsuario', 'aluno');
      navigate('/aluno');
      return;
    }
    //se nenhuma das condiçoes acima foi atendida
    alert('E-mail ou senha inválidos');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
