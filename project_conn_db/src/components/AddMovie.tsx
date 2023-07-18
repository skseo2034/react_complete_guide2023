import React, { useRef } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props: any) {
	const titleRef = useRef<HTMLInputElement | null>(null);
	const openingTextRef = useRef<HTMLTextAreaElement | null>(null);
	const releaseDateRef = useRef<HTMLInputElement | null>(null);

	function submitHandler(event: any) {
		event.preventDefault();

		// could add validation here...
		let aa = '';
		if (titleRef.current) {
			aa = titleRef.current.value;
		}

		let bb = '';
		if (openingTextRef.current) {
			bb = openingTextRef.current.value;
		}

		let cc = '';
		if (releaseDateRef.current) {
			cc = releaseDateRef.current.value;
		}
		const movie = {
			title: aa,
			openingText: bb,
			releaseDate: cc,
		};

		props.onAddMovie(movie);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" ref={titleRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="opening-text">Opening Text</label>
				<textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
			</div>
			<div className={classes.control}>
				<label htmlFor="date">Release Date</label>
				<input type="text" id="date" ref={releaseDateRef} />
			</div>
			<button>Add Movie</button>
		</form>
	);
}

export default AddMovie;
