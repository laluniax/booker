import axios from 'axios';
import { useQuery } from 'react-query';

export const useAladinBooksQuery = (url: string) => {
  return useQuery(['aladinBooks', url], () => axios.get(url));
};
