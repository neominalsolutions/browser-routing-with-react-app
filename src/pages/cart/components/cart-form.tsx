// Dropdown
// label
// numeric-input
// button

import { useRef, useState } from 'react';
import Button from '../../../components/button/button';
import Dropdown from '../../../components/dropdown/dropdown.component';
import Label from '../../../components/label/label';
import NumericInput from '../../../components/numeric-input/numeric-input';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

type CartFormProps = {
	onItemAdd(item: CartItem): void;
};

function CartForm({ onItemAdd }: CartFormProps) {
	console.log('...rendering');

	const products = [
		{ id: 1, name: 'ürün-1', price: 10 },
		{ id: 2, name: 'ürün-2', price: 50 },
		{ id: 3, name: 'ürün-3', price: 70 },
	];

	const dpItems = products.map((item) => {
		return {
			value: item.id,
			text: item.name,
		};
	});

	const productIdRef = useRef(-1); // seçim yok
	// onDropdownSelect -> productRef.curren = value;

	const priceRef = useRef(0); // seçilen değerin global referansını state değiştiminden sonra bile tutmamızı sağlar. bu sayede her render aldığımızda güncel değere erişimi doğru bir şekilde sağlarız.
	const quantityRef = useRef(1); // arka planda hesaplama yapmak için global değişken olarak saklanacak değerler.

	const [total, setTotal] = useState(0); // sadece ekran için önemli olan değeri virtual doma tanımladık state yaptık.

	console.log('priceRef', priceRef);
	console.log('quantityRef', quantityRef);

	const onDropdownSelect = (value: number) => {
		console.log('selected-item', value);
		const selectedItem = products.find((x) => x.id === value);
		console.log('selectedItem', selectedItem);
		priceRef.current = Number(selectedItem?.price);
		// setTotal(priceRef.current * quantityRef.current);
		productIdRef.current = value;
	};

	const onInputChange = (value: number) => {
		console.log('value', value);
		quantityRef.current = value;
		// setTotal(priceRef.current * quantityRef.current);
	};

	const onButtonClick = () => {
		console.log('tıklandı');
		setTotal(priceRef.current * quantityRef.current);

		const item = products.find((x) => x.id === productIdRef.current);

		// Formda seçilen ekle butonuna basınca eklenecek olan item değeri props ile component üzerinden fırlattık.
		if (item) {
			onItemAdd({
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: quantityRef.current,
			} as CartItem);
		}
	};

	return (
		<>
			<h1>Cart Form</h1>
			<hr></hr>
			<Dropdown
				items={dpItems}
				label="Ürünler"
				defaultText="Ürün Seçiniz"
				onSelect={onDropdownSelect}
			/>

			<NumericInput
				min={1}
				max={10}
				defaultValue={1}
				label="Adet:"
				onChange={onInputChange}
			/>

			<Button color="secondary" onClick={onButtonClick}>
				Ekle
			</Button>

			<Label text="Toplam Tutar" value={total} />
		</>
	);
}

export default CartForm;
