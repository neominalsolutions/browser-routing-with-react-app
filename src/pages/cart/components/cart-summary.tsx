// card items componenti ile arayüz dolsun

import CardItem from '../../../components/card-item/card-item';
import Label from '../../../components/label/label';
import type { CartItem } from './cart-form';

type CartSummaryProps = {
	items: CartItem[];
};

function CartSummary({ items }: CartSummaryProps) {
	const total = items.reduce(
		(total, item) => total + item.quantity * item.price,
		0
	);

	return (
		<>
			<h1>Cart Summary</h1>
			{items.map((item) => {
				return (
					<CardItem
						key={item.id}
						text={`${item.name} x ${item.quantity} = ${
							item.quantity * item.price
						}`}
					/>
				);
			})}
			<Label text="Cart Total : " value={total}></Label>
		</>
	);
}

export default CartSummary;
