type CardItemProps = {
	text: string;
};

function CardItem({ text }: CardItemProps) {
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
				</div>
			</div>
		</>
	);
}

export default CardItem;
