import Button from '../button/button';

type CardItemProps = {
	text: string;
	index: number; // hangi item silinecek ise bulmamızı sağlar
	onItemDelete(index: number): void;
};

function CardItem({ text, index, onItemDelete }: CardItemProps) {
	return (
		<>
			<div style={{ margin: 5 }}>
				<div
					style={{
						margin: 5,
						padding: 5,
						borderRadius: 5,
						border: '1px solid gray',
					}}
				>
					{text}
					<Button color="danger" onClick={() => onItemDelete(index)}>
						Sil
					</Button>
				</div>
			</div>
		</>
	);
}

export default CardItem;
