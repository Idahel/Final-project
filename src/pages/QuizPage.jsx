import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { useState, useEffect } from 'react';

export const QuizPage = () => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    document.body.classList.add('quiz-page');
    return () => {
      document.body.classList.remove('quiz-page');
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
              to="/tips"
              className={`nav-button ${activeButton === 'tips' ? 'active' : ''}`}
              onClick={() => handleButtonClick('tips')}
            >
              Tips
            </Link>
          </li>
          <li>
            <Link
              to="/second-hand-stores"
              className={`nav-button ${activeButton === 'stores' ? 'active' : ''}`}
              onClick={() => handleButtonClick('stores')}
            >
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <h3>QUIZ - FASHION PRODUCTION</h3>
      <Quiz />
    </div>
  );
};

export default QuizPage;
