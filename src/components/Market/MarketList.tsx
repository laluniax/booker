import { useNavigate } from 'react-router-dom';

const MarketList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>MarketList</div>
      <button
        onClick={() => {
          navigate('/marketpost');
        }}>
        글 쓰기
      </button>
    </>
  );
};

export default MarketList;
