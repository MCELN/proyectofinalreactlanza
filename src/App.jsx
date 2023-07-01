import './App.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';

function App() {
    return (
      <div>
        <ProductsProvider>
          <CartProvider>
            <MainRouter />
          </CartProvider>
        </ProductsProvider>
      </div>
    );
}

export default App;
