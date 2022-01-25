import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CustomDatePhoto from '../Pages/CustomDatePhoto';

describe('Photo of custom day', () => {

    test('initial value must january 19', () => {
        render(<CustomDatePhoto />);
        const input = screen.getByDisplayValue('2022-01-19');
        expect(input.value).toEqual('2022-01-19');
    });

    test('shows the input', async () => {
        render(<CustomDatePhoto />);
        await waitFor(() => {
            const input = screen.getByTestId('date-input');
            expect(input).toBeInTheDocument();
        });
    });

    test('shows the img or video', async () => {
        render(<CustomDatePhoto />);
        await waitFor(() => {
            const img = screen.getByTestId('img');
            expect(img).toBeInTheDocument();
        });
    });

    test('changes the input', async () => {
        render(<CustomDatePhoto />);
        await waitFor(() => {
            const input = screen.getByTestId('date-input');
            fireEvent.change(input, { target: { value: '2022-01-20' } }); //eslint-disable-line
            expect(input).toBeInTheDocument();
        });
    });
});