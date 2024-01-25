import { Session } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../api/supabase.api';

type AuthContextValue = {
  isAuthInitialized: boolean;
  session: (Session & { profile: { nickname: string; isAdmin: boolean; id: string } }) | null;
};

const initialValue: AuthContextValue = {
  isAuthInitialized: false,
  session: null,
};

const AuthContext = createContext(initialValue);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isAuthInitialized, setIsAuthInitialized] = useState<AuthContextValue['isAuthInitialized']>(false);
  const [session, setSession] = useState<AuthContextValue['session']>(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        const getUsersData = await supabase.from('users').select('*').eq('id', session.user.id).single();

        setSession({ ...session, profile: getUsersData.data });
      } else {
        setSession(null);
      }
      setIsAuthInitialized(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        supabase
          .from('users')
          .select('*')
          .eq('id', session!.user.id)
          .single()
          .then((getUsersData) => {
            setSession({ ...session!, profile: getUsersData.data });
          });
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const value: AuthContextValue = {
    isAuthInitialized,
    session,
  };

  if (!isAuthInitialized) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
