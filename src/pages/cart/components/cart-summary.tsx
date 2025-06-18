// card items componenti ile arayüz dolsun

import CardItem from '../../../components/card-item/card-item';
import Label from '../../../components/label/label';
import type { CartItem } from './cart-form';

type CartSummaryProps = {
	items: CartItem[];
	onItemRemove(item: CartItem): void;
};

function CartSummary({ items, onItemRemove }: CartSummaryProps) {
	const total = items.reduce(
		(total, item) => total + item.quantity * item.price,
		0
	);

	const onItemDelete = (index: number) => {
		console.log('silinecek olan index', index);
		const deletedItem = items[index];
		console.log('deletedItem', deletedItem);
		onItemRemove(deletedItem); // obje olarak silinecek olan nesneyi bulduk. bunu state bulunduğu üst componente nesne olarak ilettik.

		// Not: Propslar ancak state değiştiğinde yeni state ile birlikte componentin görüntüsünü ekrana yazar. props değerleri state gibi değiştirilemez. Ekranın yeniden render almasını props tek başına sağlayamaz. Aşağıdaki kod bu sebeple çalışmadı.
		// items = [...items.filter((x) => x.id !== deletedItem.id)];
	};

	return (
		<>
			<h1>Cart Summary</h1>
			<hr></hr>
			{items.map((item, index) => {
				return (
					<CardItem
						key={item.id}
						index={index}
						onItemDelete={onItemDelete}
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
