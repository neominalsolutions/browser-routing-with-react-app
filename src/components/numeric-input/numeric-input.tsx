import type { ChangeEvent } from 'react';
type NumericProps = {
	label: string;
	defaultValue: number;
	onChange(value: number): void;
	min?: number;
	max?: number;
};
function NumericInput({
	label,
	defaultValue,
	min,
	max,
	onChange,
}: NumericProps) {
	
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = (e.target as HTMLInputElement).value;
		onChange(Number(value));
	};
	return (
		<>
			<div style={{ padding: 5 }}>
				<label style={{ minWidth: 100, display: 'inline-block' }}>
					<b>{label}</b>
				</label>
				<input
					type="number"
					defaultValue={defaultValue}
					max={max}
					min={min}
					onChange={onInputChange}
				/>
			</div>
		</>
	);
}

export default NumericInput;
