import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const { itemId } = useParams();
  console.log(itemId);
  return <div></div>;
};

export default BookDetailPage;
