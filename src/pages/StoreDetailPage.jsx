import { useParams, useNavigate } from 'react-router-dom';
import { storeDetail } from '../data/StoreDetail';
import { useEffect } from 'react';

export const StoreDetailPage = () => {
  const navigate = useNavigate();
  const { storeName } = useParams();
  const store = storeDetail.find((store) => store.id === storeName);

  useEffect(() => {
    document.body.classList.add('store-detail-page');
    return () => {
      document.body.classList.remove('store-detail-page');
    };
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>{store.name}</h3>
      <p>Address: {store.address}</p>
      <p>Opening hours:</p>
      <div>
        <p>{store.openingHours.monFri}</p>
        <p>{store.openingHours.saturday}</p>
        <p>{store.openingHours.sunday}</p>
      </div>
      <button className="back-btn" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default StoreDetailPage;
