import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SecondHandStoresPage = () => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    document.body.classList.add('stores-page');
    return () => {
      document.body.classList.remove('stores-page');
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    };

  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link
              to="/"
              className={`nav-button ${activeButton === 'info' ? 'active' : ''}`}
              onClick={() => handleButtonClick('info')}
            >
              Info
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className={`nav-button ${activeButton === 'quiz' ? 'active' : ''}`}
              onClick={() => handleButtonClick('quiz')}
            >
              Take quiz
            </Link>
          </li>
          <li>
            <Link 
              to="/tips"
              className={`nav-button ${activeButton === 'tips' ? 'active' : ''}`}
              onClick={() => handleButtonClick('tips')}
            >
              Tips
            </Link>
          </li>
        </ul>
      </nav>

      <h3>A selection of second hand stores in Stockholm</h3>
      <h4>Södermalm</h4>
      <div>
      <Link className='store-link' to="/store-overview/humana">HUMANA Second Hand STHLM MARIATORGET</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/napoli">Napoli Centrale Italian Vintage</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/artikel2">Artikel2 Second hand Slussen</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/sthlm-gron">STHLM GRÖN</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/pop-stockholm">POP Stockholm</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/stadsmission">Stockholms Stadsmissions second hand</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/reys-market">Reys Market curated Second-hand clothing</Link>
      </div>
      <h4>Kungsholmen</h4>
      <div>
      <Link className='store-link' to="/store-overview/59-vintage-store">59 Vintage Store</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/myrorna-kungsholmen">Myrorna - Second hand Kungsholmen</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/second-hand-kungsholmen">Second hand butik</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/nastan-perfekt">Nästan Perfekt Second hand</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/roda-korset">Röda Korset</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/stadsmission-kungsholmen">Stockholms Stadsmissions second hand</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/ting">Ting från förr och nu</Link>
      </div>
      <h4>City</h4>
      <div>
      <Link className='store-link' to="/store-overview/myrorna-city">Myrorna - Second hand Mäster Samuelsgatan</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/arkivet">ARKIVET Sergel</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/beyond-retro-city">Beyond Retro Drottninggatan</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/humana-city">HUMANA Second Hand</Link>
      </div>
      <h4>Östermalm</h4>
      <div>
      <Link className='store-link' to="/store-overview/petronella">Petronella Second Hand</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/arkivet-ostermalm">ARKIVET Östermalm</Link>
      </div>
      <h4>Bromma</h4>
      <div>
      <Link className='store-link' to="/store-overview/stadsmissionen-bromma">Stadsmissionen Bromma</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/sgg">SGG second hand</Link>
      </div>
      <h4>Solna/Sundbyberg</h4>
      <div>
      <Link className='store-link' to="/store-overview/myrorna-sundbyberg">Myrorna Sundbyberg</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/everlong">Everlong Vintage 2nd Hand</Link>
      </div>
      <div>
      <Link className='store-link' to="/store-overview/stadsmission-solna">Stockholms Stadsmission Second hand</Link>
      </div>
    </div>
    
  );
};

export default SecondHandStoresPage;
