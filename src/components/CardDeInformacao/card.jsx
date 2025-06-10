import './card.css';

function Card({ icon, label, onClick, size = "medium", className = "" }) {
  return (
    <div className={`card ${size} ${className} `} onClick={onClick}>
      <img src={icon} alt={label} className="card-icon" />
      <p>{label}</p>
    </div>
  );
}

export default Card;
