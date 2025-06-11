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
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("nome", data.nome);
        localStorage.setItem("role", data.role);
        alert("Login realizado com sucesso");
    });


    const emailLower = email.toLowerCase();
    const role = localStorage.getItem("role")

    if (role === "admin"){
            leva pra cordenacao
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

