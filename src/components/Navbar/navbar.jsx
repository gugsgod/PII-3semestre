import './navbar.css';
import logo from '../../assets/logo_poliedro.png';

function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="user-info">
        <span>{props.usuario}</span>
      </div>
    </nav>
  );
}

export default Navbar;
