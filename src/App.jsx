import './App.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { UsersProvider } from './context/UsersContext';
import { LoginProvider } from './context/LoginContext';

function App() {
    return (
      <div>
        <UsersProvider>
          <LoginProvider>
            <ProductsProvider>
              <CartProvider>
                <MainRouter />
              </CartProvider>
            </ProductsProvider>
          </LoginProvider>
        </UsersProvider>
      </div>
    );
}

export default App;
