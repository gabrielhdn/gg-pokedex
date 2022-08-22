import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home';
import GlobalStyles from '../../styles/global';
import { defaultThemes } from '../../styles/default';

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
