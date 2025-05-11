import './card.css';

function Card({ icon, label }) {
  return (
    <div className="card">
      <img src={icon} alt={label} className="card-icon" />
      <p>{label}</p>
    </div>
  );
}

export default Card;
