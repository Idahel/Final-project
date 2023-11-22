import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import QuizPage from './QuizPage';
import TipsPage from './TipsPage';
import SecondHandStoresPage from './SecondHandStoresPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/quiz"
          element={<QuizPage />}
        />
        <Route
          path="/tips"
          element={<TipsPage />}
        />
        <Route
          path="/second-hand-stores"
          element={<SecondHandStoresPage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
