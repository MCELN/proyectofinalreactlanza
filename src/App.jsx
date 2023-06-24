import './App.css';
import MainRouter from './router/MainRouter';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';

function App() {
    return (
      <div>
        <LoginProvider>
          <CartProvider>
            <MainRouter />
          </CartProvider>
        </LoginProvider>
      </div>
    );
}

export default App;
