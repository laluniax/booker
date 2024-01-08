import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./styles/globalStyle";
import Router from "./shared/Router";

const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
