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
      <p className="highlighted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac efficitur metus. Fusce nec justo eget odio scelerisque semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque non justo id est vestibulum lacinia nec vitae tellus. Curabitur quis libero sit amet arcu accumsan eleifend.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non quam vel lacus dapibus semper. Sed sit amet mauris et quam consectetur efficitur. Vivamus ut orci vel elit iaculis consequat ut nec tellus. Duis quis purus a urna imperdiet euismod eget sed purus.Nullam posuere, ex at posuere scelerisque, velit dui elementum nisi, in consequat est purus vel justo. Nulla facilisi. Praesent dapibus, dui id facilisis vulputate, dolor turpis fringilla neque, ut pulvinar ex est at orci. Integer sit amet lacus vitae urna volutpat cursus. Suspendisse euismod mauris a magna accumsan volutpat.Morbi commodo odio a est efficitur facilisis. Vestibulum rhoncus neque vel nulla sodales, ac luctus leo facilisis. Nunc cursus velit quis dui volutpat, a ultrices arcu auctor. Vivamus ut neque urna. Proin et odio id elit ultrices consequat. Sed eu lectus at quam hendrerit semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac efficitur metus. Fusce nec justo eget odio scelerisque semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque non justo id est vestibulum lacinia nec vitae tellus. Curabitur quis libero sit amet arcu accumsan eleifend.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non quam vel lacus dapibus semper. Sed sit amet mauris et quam consectetur efficitur. Vivamus ut orci vel elit iaculis consequat ut nec tellus. Duis quis purus a urna imperdiet euismod eget sed purus.Nullam posuere, ex at posuere scelerisque, velit dui elementum nisi, in consequat est purus vel justo. Nulla facilisi. Praesent dapibus, dui id facilisis vulputate, dolor turpis fringilla neque, ut pulvinar ex est at orci. Integer sit amet lacus vitae urna volutpat cursus. Suspendisse euismod mauris a magna accumsan volutpat.Morbi commodo odio a est efficitur facilisis. Vestibulum rhoncus neque vel nulla sodales, ac luctus leo facilisis. Nunc cursus velit quis dui volutpat, a ultrices arcu auctor. Vivamus ut neque urna. Proin et odio id elit ultrices consequat. Sed eu lectus at quam hendrerit semper.</p>
      </div>
    </div>
  );
};

export default HomePage;
