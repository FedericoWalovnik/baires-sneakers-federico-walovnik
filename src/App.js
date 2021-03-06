import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './views/Home/Home'
import Cart from './views/Cart/Cart'
import FinishOrder from './views/FinishOrder/FinishOrder'
import Checkout from './views/Checkout/Checkout'
import PageNotFound from './views/PageNotFound/PageNotFound'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ThemeProvider } from '@mui/material/styles';
import { CartProvider } from "./context/CartContext";

import theme from './material-theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title={'Mens Lifestyle Shoes'} />} />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/finish-order/:orderId" element={<FinishOrder />} />
            <Route path="/notFound" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
