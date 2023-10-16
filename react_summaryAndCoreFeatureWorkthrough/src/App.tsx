import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(true);

	function showModalHandler() {
		setModalIsVisible(true);
	}

	function hideModalHandler() {
		setModalIsVisible(false);
	}

	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
			</main>
		</>
	);
}

export default App;
