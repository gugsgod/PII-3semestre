import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo_poliedro_extenso.png';

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

    alert('E-mail ou senha inválidos');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src={logo} alt="Poliedro Educação" className="login-logo" />
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" className='botao-login'>Login</button>
        </form>
        <a href="/" className="forgot-link">Esqueceu a senha?</a>
      </div>
    </div>
  );
}

export default Login;

