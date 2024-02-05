import { useQuery } from 'react-query';
import { getUserDataHandler } from '../../api/Supabase.api';

export const useUserDataQuery = (userId: string) => {
  // useQuery([query key]), () => {query function}
  return useQuery(['user', userId], () => getUserDataHandler(userId));
};
