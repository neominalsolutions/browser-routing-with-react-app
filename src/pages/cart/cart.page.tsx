// Cart Sayfasını yönettiğimiz sayfa component

import CartForm from './components/cart-form';
import CartSummary from './components/cart-summary';

function CartPage() {
	return (
		<>
			<CartForm />
			<CartSummary />
		</>
	);
}

export default CartPage;
