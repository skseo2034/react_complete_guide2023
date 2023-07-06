import './Card.module.css';
import React, { FC } from 'react';

import classes from './Card.module.css';

interface Props {
	cssClass: string;
	children: React.ReactNode;
}

const Card: FC<Props> = ({ cssClass, children }) => {
	return <div className={`${classes.card} ${cssClass}`}>{children}</div>;
};

export default Card;
