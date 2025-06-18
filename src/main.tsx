import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import CartComponent from './components/cart.component.tsx';
import CartPage from './pages/cart/cart.page.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <App /> */}
		{/* <CartComponent /> */}
		<CartPage />
	</StrictMode>
);
