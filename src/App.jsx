import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />
    </BrowserRouter>
  );
}

export default App;