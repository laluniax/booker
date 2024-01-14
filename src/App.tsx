import { useEffect } from 'react';
import { supabase } from './api/supabase.api';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';

const App = () => {
  useEffect(() => {
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          schema: 'public', // Subscribes to the "public" schema in Postgres
          event: '*', // Listen to all changes
        },
        (payload) => console.log('app전역관리',payload),
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Router />
    </AuthContextProvider>
  );
};

export default App;
