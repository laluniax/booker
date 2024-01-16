import axios from 'axios';
import { useEffect, useState } from 'react';

interface Special {
  author: string;
  categoryName: string;
  cover: string;
  description: string;
  title: string;
  bestRank: number;
}

const BookSpecial = () => {
  const [special, setSpecial] = useState<Special[]>([]);

  useEffect(() => {
    getSpecial();
  }, []);

  const getSpecial = async () => {
    const response = await axios.get('https://port-0-node-express-3wh3o2blr53yzc2.sel5.cloudtype.app/special');
    setSpecial(response.data.item);
  };

  return <div></div>;
};

export default BookSpecial;
