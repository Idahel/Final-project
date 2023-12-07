import AppRoutes from './pages/AppRoutes';
import Header from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;