import { render, screen } from '@testing-library/react';
import PhotoOfTheDay from '../Pages/PhotoOfTheDay';

describe('Photo of the day', () => {
    test('must show an img', () => {
        render(<PhotoOfTheDay />);
        const img = screen.getByAltText('PhotoOfTheDay');
        expect(img).toBeInTheDocument();
    })
});