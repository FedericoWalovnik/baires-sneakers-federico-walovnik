import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ThemeProvider } from '@mui/material/styles';
import theme from './material-theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ItemListContainer title={'Mens Lifestyle Shoes'} />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
