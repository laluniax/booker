import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';

const App = () => {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Router />
    </AuthContextProvider>
  );
};

export default App;
