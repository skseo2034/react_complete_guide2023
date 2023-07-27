const redux = require('redux');

// Reducer Function 은  입력으로 이전 상태(Old state) 와 Dispatched Action을 받는다.
// 그리고 새로운 상태 객체(New State Object) 를 반환 한다.
const counterReducer = (state = { counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }


    return state;
}

// 가게 점원과 연결
const store = redux.createStore(counterReducer);

// 구독자(손님)
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// 가게와 구독자(손님) 과 연결
store.subscribe(counterSubscriber);

// 주문
store.dispatch({ type: 'increment'});

store.dispatch({ type: 'decrement'});
