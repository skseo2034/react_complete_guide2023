interface conceptItemType {
	title: string;
	image: any;
	description: string;
}
const ConceptItem = (props: { item: conceptItemType }) => {
	const { title, image, description } = props.item;
	return (
		<li className="concept">
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</li>
	);
};

export default ConceptItem;
