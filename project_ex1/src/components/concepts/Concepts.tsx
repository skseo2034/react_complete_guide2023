import ConceptItem from './ConceptItem';

interface conceptItemType {
	title: string;
	image: any;
	description: string;
}
const Concepts = (props: { concepts: conceptItemType[] }) => {
	return (
		<ul id="concepts">
			{props.concepts.map((item, index) => (
				<ConceptItem key={index} item={item} />
			))}
		</ul>
	);
};

export default Concepts;
