import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import CartComponent from './components/cart.component.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* <App /> */}
		<CartComponent />
	</StrictMode>
);
