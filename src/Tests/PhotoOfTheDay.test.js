import { render, screen, waitFor } from '@testing-library/react';
import PhotoOfTheDay from '../Pages/PhotoOfTheDay';
import * as React from 'react';

describe('Photo of the day', () => {
    
    test('loading as true', () => {
        render(<PhotoOfTheDay />);
        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    test('shows the img or video', async () => {
        render(<PhotoOfTheDay />);
        await waitFor(() => {
            const img = screen.getByTestId('img');
            expect(img).toBeInTheDocument();
        });
    });

    test('shows the title', async () => {
        render(<PhotoOfTheDay />);
        await waitFor(() => {
            const title = screen.getByTestId('title');
            expect(title).toBeInTheDocument();
        });
    });

    test('shows the description', async () => {
        render(<PhotoOfTheDay />);
        await waitFor(() => {
            const description = screen.getByTestId('description');
            expect(description).toBeInTheDocument();
        });
    });

});