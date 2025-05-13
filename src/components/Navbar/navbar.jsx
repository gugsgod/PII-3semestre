import './navbar.css';
import logo from '../../assets/logo_poliedro.png';
import avatar from '../../assets/avatar_professor.png';

function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="user-info">
        <img src={avatar} alt="Avatar do usuário" className="avatar-image" />
        <span>{props.usuario}</span>
      </div>
    </nav>
  );
}

export default Navbar;
