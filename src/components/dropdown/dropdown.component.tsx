// dışarıdan value,text propslardan oluşan bir dropdown modeli göndermeliyim. ki bu dropdown items olarak gönderilen herhangi bir veriyi arayüze çizebilsin.

export interface DropdownModel {
	value: number | string;
	text: string;
}
type DropdownProps = {
	items: DropdownModel[];
	label: string;
	defaultText: string;
	onSelect(value: number): void;
};
function Dropdown({ items, label, defaultText, onSelect }: DropdownProps) { // Pure Component -> içinde componenti render edecek herhangi bir state barındırmayan fakat, propslar ile component render edildiğinde propstan gönderilen değerlere göre çalışan componentler, stateless componentler.
	const onItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log('e', e);

		const val = (e.target as HTMLSelectElement).value;
		onSelect(Number(val)); // product bağımlılığı olmaması için seçilen value component dışına fırlattık.
	};

	return (
		<div style={{ padding: 5 }}>
			<label style={{ minWidth: 100, display: 'inline-block' }}>
				<b>{label}: </b>
			</label>
			<select onChange={onItemSelect}>
				<option selected={true} value={-1}>
					{defaultText}
				</option>
				{items.map((item) => {
					return <option value={item.value}>{item.text}</option>;
				})}
			</select>
		</div>
	);
}

export default Dropdown;
