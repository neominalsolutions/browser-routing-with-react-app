// Dropdown
// label
// numeric-input
// button

import { useRef, useState } from 'react';
import Button from '../../../components/button/button';
import Dropdown from '../../../components/dropdown/dropdown.component';
import Label from '../../../components/label/label';
import NumericInput from '../../../components/numeric-input/numeric-input';

function CartForm() {
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
		setTotal(priceRef.current * quantityRef.current);
	};

	const onInputChange = (value: number) => {
		console.log('value', value);

		quantityRef.current = value;
		setTotal(priceRef.current * quantityRef.current);
	};

	const onButtonClick = () => {
		console.log('tıklandı');
	};

	return (
		<>
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

			<h1>Cart Form</h1>
		</>
	);
}

export default CartForm;
