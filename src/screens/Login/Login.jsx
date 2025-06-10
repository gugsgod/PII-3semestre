import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo_poliedro_extenso.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {

    const email = document.getElementById("campo-email").value;
    const password = document.getElementById("campo-senha").value;

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.text())
    .then(token => {
        localStorage.setItem("jwt", token);
        alert("Token salvo!");
    });


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
            id="campo-email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="campo-senha"
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

