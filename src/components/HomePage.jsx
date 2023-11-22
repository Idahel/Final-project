import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const HomePage = () => {

  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className='nav-bar-home'>
        <ul>
          <li>
            <Link to="/quiz">Take quiz</Link>
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
      <div className='home-page-content'>
      <h3>Short about responsible choices and the agenda 2030...</h3>
      <p>Introduction to responsible fashion consumption...</p>
      </div>
    </div>
  );
};

export default HomePage;
