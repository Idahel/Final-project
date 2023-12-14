/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
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

      <h3>Agenda 2030 and the Fashion Industry: A Brief Overview</h3>
      <h4>Agenda 2030: An Introduction</h4>
      <p>Agenda 2030, adopted by all United Nations Member States in 2015, is a comprehensive and ambitious plan for sustainable development. At its core are 17 Sustainable Development Goals (SDGs) that collectively address various global challenges, ranging from poverty and hunger to climate action and gender equality. The agenda serves as a roadmap for countries and organizations to work collaboratively towards a more sustainable and equitable world by the year 2030.</p>
      <h4>The Fashion Industry's Role in Agenda 2030</h4>
      <p>The fashion industry, a significant player in the global economy, is both a contributor to and, increasingly, a target for achieving the SDGs. Several SDGs intersect with the fashion sector, reflecting the industry's impact on environmental, social, and economic aspects. Here's a concise summary of the key SDGs relevant to the fashion industry:</p>
      <h5>SDG 12: Responsible Consumption and Production</h5>
      <p>The fashion industry is a major consumer of resources and contributor to waste. SDG 12 calls for sustainable consumption and production patterns, urging the fashion sector to adopt eco-friendly practices, reduce waste, and embrace circular economy principles.</p>
      <h5>SDG 8: Decent Work and Economic Growth</h5>
      <p>Labor conditions within the fashion supply chain have been a longstanding concern. SDG 8 emphasizes the need for decent work conditions, fair wages, and economic growth. Brands are encouraged to address labor rights and contribute positively to the communities they operate in.</p>
      <h5>SDG 13: Climate Action</h5>
      <p>The fashion industry is implicated in environmental issues, including pollution and greenhouse gas emissions. SDG 13 focuses on urgent action to combat climate change, urging the fashion sector to reduce its carbon footprint, embrace sustainable materials, and adapt to climate-related challenges.</p>
      <h5>SDG 5: Gender Equality</h5>
      <p>Women constitute a significant portion of the fashion industry workforce, yet gender disparities persist. SDG 5 advocates for gender equality, emphasizing the importance of empowering women in all aspects of the industry, from leadership roles to fair representation.</p>
      <p>By aligning with Agenda 2030, the fashion industry has the opportunity to transform itself into a more sustainable, ethical, and inclusive sector, contributing to the broader global goals of a better and more equitable future.</p>
      </div>
  );
};

export default HomePage;
