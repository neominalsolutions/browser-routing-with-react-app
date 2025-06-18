//

import { useEffect, useState } from 'react';

interface Product {
	id: number;
	name: string;
	price: number;
}

// sepet nesnesi
interface CartItem {
	productid: number;
	quantity: number;
	price: number;
	name: string;
}

function CartComponent() {

    // cartForm
	const products = [
		{ id: 1, name: 'ürün-1', price: 10 },
		{ id: 2, name: 'ürün-2', price: 50 },
		{ id: 3, name: 'ürün-3', price: 70 },
	];

    // numeric Input
	const [quantity, setQuantity] = useState(0); // quantity değişim state'i

    //dropdown
	const [selectedItem, setSelectedItem] = useState<Product>();
	const [total, setTotal] = useState<number>(0);

    //CartList
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Dropdown
	const onItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log('e', e);

		const selectedId = (e.target as HTMLSelectElement).value;
		const item = products.find((x) => x.id === Number(selectedId));

		if (item) {
			setSelectedItem(item);
		}
	};

    // CartPage
	// otomatik total hesaplama
	useEffect(() => {
		if (selectedItem) {
			// undefined değilse
			setTotal(quantity * selectedItem.price);
			console.log('useEffect');
		}
	}, [quantity, selectedItem]);

    // CartForm
	const addItem = () => {
		if (selectedItem) {
			const cartItem: CartItem = {
				productid: selectedItem.id,
				quantity,
				price: selectedItem.price,
				name: selectedItem.name,
			};

			const itemExists = cartItems.find((x) => x.productid === selectedItem.id);
			// nesne bir state referansına sahip olduğunda nesne içerisinde bir değer değişiminde state üzerindenki nesneye ait değer değişir.

			if (itemExists) {
				itemExists.quantity += quantity;
				setCartItems([...cartItems]); // state değişikliğini algılatmak için spread operatör ile nesnenin referansını yeniden oluşturduk.
			} else {
				// eğer aynı üründen cartItems içerisinde varsa quantity değerini güncelle
				// eğer aynı üründen cartItems içerisinde yoksa yeni bir item olarak ekle.

				//prepend ettik
				setCartItems([cartItem, ...cartItems]);
			}
		}
	};

	return (
		<>
			<div>
				<div style={{ padding: 5 }}>
					<label style={{ minWidth: 100, display: 'inline-block' }}>
						<b>Ürünler:</b>
					</label>
					<select onChange={onItemSelect}>
						<option selected={true} value={-1}>
							Ürün Seçiniz
						</option>
						{products.map((item) => {
							return <option value={item.id}>{item.name}</option>;
						})}
					</select>
				</div>

				<div style={{ padding: 5 }}>
					<label style={{ minWidth: 100, display: 'inline-block' }}>
						<b>Adet:</b>
					</label>
					<input
						type="number"
						value={quantity}
						min={0}
						onChange={(e) => {
							setQuantity(Number(e.target.value));
						}}
					/>
				</div>

				<div>Toplam: {total}</div>

				<div>
					<button onClick={addItem}>Ekle</button>
				</div>

				<hr></hr>
				<h1>Sepete Arayüzü</h1>

				<div style={{ padding: 5, margin: 5 }}>
					{cartItems.map((item) => {
						return (
							<div
								style={{
									backgroundColor: 'purple',
									color: 'whitesmoke',
									padding: 10,
									borderRadius: 5,
									margin: 5,
								}}
								key={item.productid}
							>
								{item.name} x {item.quantity}
								<button style={{ padding: 2, margin: 2 }}>Çıkar</button>
							</div>
						);
					})}

					<p>Sepet Toplam: 0</p>
				</div>
			</div>
		</>
	);
}

export default CartComponent;
