import reactImg from './assets/react-core-concepts.png';
import TabButton from './components/TabButton';

function App() {
	const Header = () => {
		return (
			<header>
				<img src={reactImg} alt="Stylized atom" />
				<h1>React Essentials</h1>
				<p>Fundamental React concepts you will need for almost any app you are going to build!</p>
			</header>
		);
	};

	const onSelect = (selectText: string) => {
		console.log('onSelectText >>>>> ', selectText);
	};
	return (
		<div>
			{/*{Header()}*/}
			<Header />
			<main>
				<h2>Time to get started!</h2>
			</main>
			<menu>
				<ul>
					{/*<TabButton onSelect={() => onSelect('Componet')}>Component</TabButton>*/}
					<TabButton onSelect={() => onSelect('Componet')}>Component</TabButton>
				</ul>
			</menu>
		</div>
	);
}

export default App;
