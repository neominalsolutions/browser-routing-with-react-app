import { useEffect } from 'react';

type LabelProps = {
	text: string;
	value: string | number;
};

function Label({ text, value }: LabelProps) {
	useEffect(() => {
		console.log('...label rendering');
	}, []); //[value]

	return (
		<div style={{ marginTop: 10 }}>
			<label style={{ padding: 5, fontWeight: 'bold' }}>
				{text}: {value}
			</label>
		</div>
	);
}

export default Label;
