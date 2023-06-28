import './ExpenseDate.css';

const ExpenseDate = (props: { date: Date }) => {
	const month = props.date.toLocaleDateString('ko-KR', { month: 'long' });
	const day = props.date.toLocaleDateString('ko-KR', { day: '2-digit' });
	const year = props.date.getFullYear();
	return (
		<div className="expense-date">
			<div className="expense-date__year">{year}년&nbsp;</div>
			<div className="expense-date__month">{month}&nbsp;</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
};

export default ExpenseDate;
