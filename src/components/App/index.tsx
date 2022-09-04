import { ThemeProvider } from 'styled-components';
import { PokemonProvider } from '../../contexts/Pokemons';
import Home from '../../pages/Home';
import GlobalStyles from '../../styles/global';
import { defaultThemes } from '../../styles/default';

function App() {
  return (
    <PokemonProvider>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </PokemonProvider>
  );
}

export default App;
