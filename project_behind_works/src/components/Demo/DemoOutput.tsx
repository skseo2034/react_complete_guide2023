import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props: { show: boolean }) => {
	console.log('Demo Running');
	return <MyParagraph>{props.show ? 'This is New!' : ''}</MyParagraph>;
};

/*
memo 는 속성값이 바뀌었을때만 리랜더링한다. 자식을 포함해서
그렇다면 왜 무조건 사용하지 않는것일까? memo 사용에는 추가비용이 발생한다.
속성을 저장해야 하고, 매번 비교를 해야 한다.
그럼 언제 사용하는가? 비용을 비교해 봐야 겠지만,
구성요소 트리가 크고, 구성요소가 많다면, 사용해서 불필요한 랜더링을 막아 주는게 좋다.
*/
export default React.memo(DemoOutput);
