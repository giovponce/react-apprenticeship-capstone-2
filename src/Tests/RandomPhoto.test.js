import { render, screen } from '@testing-library/react';
import RandomPhoto from '../Pages/RandomPhoto';

describe('Photo of random day', () => {
    test('must show an img', () => {
        render(<RandomPhoto />);
        const img = screen.getByAltText('RandomPhoto');
        expect(img).toBeInTheDocument();
    })
}); 