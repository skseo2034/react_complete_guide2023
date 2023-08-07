import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

function NewsletterSignup() {
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === 'idle' && data && data.message) {
			window.alert(data.message);
		}
	}, [data, state]);

	return (
		// fetcher.Form 을 사용하면 Form 과 달리 전환이나 다른경로로 이동을 하지 않고 action 만 유발한다.
		// Form 을 사용하면 sign 페이지가 상단에 고정도어 모든 페이지에 노출이 되는데..
		// 그때 singn up 버튼을 누르면 sign up 페이지로 이동한다.
		<fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
			<input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
			<button>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;
