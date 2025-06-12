import './navbar.css';
import logo from '../../assets/logo_poliedro.png';

function Navbar({ onClick }) {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="">
        <button onClick={onClick} className='mr-4 bg-[#D9D9D9] rounded-2xl p-1 w-24 shadow-lg hover:text-white'>Sair</button>
      </div>
    </nav>
  );
}

export default Navbar;
