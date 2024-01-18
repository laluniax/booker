import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';
import { supabase } from './api/supabase.api';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          schema: 'public', // Subscribes to the "public" schema in Postgres
          event: 'INSERT', // Listen to all changes
        },
        (payload) => console.log('app전역관리',payload),
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <GlobalStyle />
      <Router />
    </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
