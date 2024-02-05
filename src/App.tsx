
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
