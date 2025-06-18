// Cart Sayfasını yönettiğimiz sayfa component

import { useState } from 'react';
import CartForm, { type CartItem } from './components/cart-form';
import CartSummary from './components/cart-summary';

// Parent Component
function CartPage() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const onItemAdd = (item: CartItem) => {
		console.log('formdan gönderilen', item);
		setCartItems([...cartItems, item]);
	};

	return (
		<>
			<h1>Cart Page</h1>
			<hr></hr>

			{/* Child Component */}
			<CartForm onItemAdd={onItemAdd} />
			<CartSummary items={cartItems} />
			{/* Child Component */}
		</>
	);
}

export default CartPage;
