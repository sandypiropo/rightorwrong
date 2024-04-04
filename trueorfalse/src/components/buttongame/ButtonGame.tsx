import './ButtonGame.css';

function ButtonGame({onClick} : { onClick: () => void }) {
  return (
    <div>
    <button className='button-true' onClick={onClick}>TRUE</button>
    <button className='button-false' onClick={onClick}>FALSE</button>
    </div>
  );
}

export default ButtonGame;
