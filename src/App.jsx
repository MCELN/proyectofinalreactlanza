import './App.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { UsersProvider } from './context/UsersContext';

function App() {
    return (
      <div>
        <UsersProvider>
          <ProductsProvider>
            <CartProvider>
              <MainRouter />
            </CartProvider>
          </ProductsProvider>
        </UsersProvider>
      </div>
    );
}

export default App;
