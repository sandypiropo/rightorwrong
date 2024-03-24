import './ButtonHome.css';

function ButtonHome({onClick} : { onClick: () => void }) {
  return (
    <button className="glow-on-hover" onClick={onClick}>START</button>
  );
}

export default ButtonHome;
