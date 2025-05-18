import './card.css';

function Card({ icon, label, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={icon} alt={label} className="card-icon w-full" />
      <p>{label}</p>
    </div>
  );
}

export default Card;
