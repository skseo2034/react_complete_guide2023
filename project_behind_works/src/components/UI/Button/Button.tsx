import React from 'react';

import classes from './Button.module.css';

const Button = (props: any) => {
	console.log('Button Running');
	return (
		<button
			type={props.type || 'button'}
			className={`${classes.button} ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

// button 은 바뀔일이 거의 없다. memo 가 유용하다.
// App 컴포넌트에서 toggleParagraphHandler 가 실행 될때 리랜더링 된다.
// 즉 Button 으로 넘기는 property 가 변경되는 것이다.
// 그래서 memo 를 했음에도 리랜더링이 된다.
// 그때 App 컴포넌트 toggleParagraphHandler 에 useCallback 를 사용하면 된다.
export default React.memo(Button);
