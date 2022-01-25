import { render, screen, waitFor } from '@testing-library/react';
import RandomPhoto from '../Pages/RandomPhoto';

describe('Photo of random day', () => {

    test('loading as true', () => {
        render(<RandomPhoto />);
        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    test('shows the img or video', async () => {
        render(<RandomPhoto />);
        await waitFor(() => {
            const img = screen.getByTestId('img');
            expect(img).toBeInTheDocument();
        });
    });
}); 