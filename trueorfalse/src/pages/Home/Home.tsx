import { useState } from 'react';
import Game from '../Game/Game';
import Button from '../../components/buttonhome/ButtonHome';
import './Home.css';

function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  function renderContent() {
    if (gameStarted) {
      return <Game />;
    } else {
      return (
        <>
          <section className="bg">
              <div className="content">
                <div className="logo">
                  <h2>THE</h2>
                  <h1>TRUE</h1>
                  <h2>OR</h2>
                  <h1>FALSE</h1>
                  <h2>LESBIAN GAME</h2>
                </div>
                <div className="card">
                  <p>A question game that involves the sapphic-lesbian world</p>
                  <p>designed to test your level of homosexuality</p>
                </div>
                <div className="read-the-docs">
                  <Button onClick={() => setGameStarted(true)}/> 
                  <p>Click to Start</p>
                </div>
                <div className="footer">
                  <p>Inspired in The Highe Lower Game</p>
                  <p>
                    &copy; 2024 Developed by Sandy Pirôpo. All rights reserved.
                  </p>
                </div>
              </div>
          </section>
        </>
      );
    }
  }

  return (
    <>
      {renderContent()}
    </>
  );
}

export default Home;