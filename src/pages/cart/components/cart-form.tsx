// Dropdown
// label
// numeric-input
// button

import Dropdown from '../../../components/dropdown/dropdown.component';

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

	return (
		<>
			<Dropdown
				items={dpItems}
				label="Ürünler"
				defaultText="Ürün Seçiniz"
				onSelect={onDropdownSelect}
			/>
			<h1>Cart Form</h1>
		</>
	);
}

export default CartForm;
