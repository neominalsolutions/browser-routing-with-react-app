import type { ReactNode } from 'react';
import type React from 'react';

// Not Children kısmına text, component, html element ne itersek geçebiliriz.

type ButtonProps = {
	color?: ButtonColor; // #ffff
	children: ReactNode; // Ekle // Component Aç ve Kapama tagleri ile çalışabilir
	onClick(): void; // Butonun click yapıldığını form componentten yakalamak için kullandık.
};
type ButtonColor = 'primary' | 'secondary' | 'danger';
function Button({ children, color, onClick }: ButtonProps) {
	const sx: React.CSSProperties = {
		color:
			color === 'primary'
				? '#0d6efd'
				: color === 'secondary'
				? '#6c757d'
				: color === 'danger'
				? '#dc3545'
				: '#dee2e6',
		padding: 5,
		borderRadius: 5,
	};

	return (
		<>
			<button style={sx} onClick={onClick}>
				{children}
			</button>
		</>
	);
}

export default Button;

// <Button color='primary'>Ekle</Button>
