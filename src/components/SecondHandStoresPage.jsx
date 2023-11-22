import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const SecondHandStoresPage = () => {

  useEffect(() => {
    document.body.classList.add('stores-page');
    return () => {
      document.body.classList.remove('stores-page');
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
          <Link to="/tips">Tips</Link>
          </li>
        </ul>
      </nav>

      {/* Content of the Home Page */}
      <h3>TIPS ON HOW....</h3>
    </div>
  );
};

export default SecondHandStoresPage;
