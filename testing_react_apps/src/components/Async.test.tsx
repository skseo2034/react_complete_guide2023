import { render, screen } from '@testing-library/react';
import Async from './Async';
import async from './Async';

describe('Async component', () => {
	test('renders posts if request succeeds', async () => {
		window.fetch = jest.fn();
		(window.fetch as jest.Mock).mockResolvedValueOnce({
			json: async () => [{ id: 'p1', title: 'First post' }],
		});

		render(<Async />);

		const listItemElements = await screen.findAllByRole('listitem');
		expect(listItemElements).not.toHaveLength(0);
	});
});
