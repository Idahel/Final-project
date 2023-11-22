import { Link } from 'react-router-dom';
import Quiz from './Quiz';
import { useEffect } from 'react';

export const QuizPage = () => {

  useEffect(() => {
    document.body.classList.add('quiz-page');
    return () => {
      document.body.classList.remove('quiz-page');
    };
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <Link to="/">Info</Link>
          </li>
          <li>
            <Link to="/tips">Tips</Link>
          </li>
          <li>
            <Link to="/second-hand-stores">Stores</Link>
          </li>
        </ul>
      </nav>

      {/* Content of the Home Page */}
      <h3>QUIZ - FASHION PRODUCTION</h3>
      <Quiz />
    </div>
  );
};

export default QuizPage;
