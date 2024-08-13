import React from 'react';

const TabButton = ({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) => {
	return (
		<li>
			<button onClick={onSelect}>{children}</button>
		</li>
	);
};

export default TabButton;
