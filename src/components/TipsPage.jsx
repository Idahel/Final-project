import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const TipsPage = () => {

  useEffect(() => {
    document.body.classList.add('tips-page');
    return () => {
      document.body.classList.remove('tips-page');
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
            <Link to="/quiz">Take quiz</Link>
          </li>
          <li>
            <Link to="/second-hand-stores">Stores</Link>
          </li>
        </ul>
      </nav>

      {/* Content of the Home Page */}
      <h3>Short about responsible choices and the agenda 2030...</h3>
      <p>Introduction to responsible fashion consumption...</p>
    </div>
  );
};

export default TipsPage;
