import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import CartPage from './pages/cart/cart.page.tsx';

createRoot(document.getElementById('root')!).render(
	<>
		{/* <App /> */}
		{/* <CartComponent /> */}
		<CartPage />
	</>
);
