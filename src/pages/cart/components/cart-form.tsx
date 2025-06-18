// Dropdown
// label
// numeric-input
// button

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

	const onDropdownSelect = (value: number) => {
		console.log('selected-item', value);
		const selectedItem = products.find((x) => x.id === value);
		console.log('selectedItem', selectedItem);
	};

	const onInputChange = (value: number) => {
		console.log('value', value);
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

			<Label text="Toplam Tutar" value={0} />

			<h1>Cart Form</h1>
		</>
	);
}

export default CartForm;
