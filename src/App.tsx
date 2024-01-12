import { useEffect } from 'react';
import { supabase } from './api/supabase.api';
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
        (payload) => console.log(payload),
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
