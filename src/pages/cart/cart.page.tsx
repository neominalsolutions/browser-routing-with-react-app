// Cart Sayfasını yönettiğimiz sayfa component

import { useState } from 'react';
import CartForm, { type CartItem } from './components/cart-form';
import CartSummary from './components/cart-summary';

// Parent Component
function CartPage() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	// Ekleme işlemi için formdan ekle butona basınca yakaladı
	const onItemAdd = (item: CartItem) => {
		console.log('formdan gönderilen', item);
		setCartItems([...cartItems, item]);
	};

	// CardItem Component içerisinde sil butonuna basınca silinecek olan değeri yakaladı.
	const onItemRemove = (item: CartItem) => {
		const filteredItems = cartItems.filter((x) => x.id !== item.id);
		setCartItems(filteredItems);
	};

	console.log('...rendering');

	return (
		<>
			<h1>Cart Page</h1>
			<hr></hr>

			{/* Child Component */}
			<CartForm onItemAdd={onItemAdd} />
			<CartSummary onItemRemove={onItemRemove} items={cartItems} />
			{/* Child Component */}
		</>
	);
}

export default CartPage;
