import { User } from '@supabase/supabase-js';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

export const userSession = atom<User | undefined>({
  key: 'userSession',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
