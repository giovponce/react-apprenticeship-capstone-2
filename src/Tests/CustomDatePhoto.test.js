import { render, screen } from '@testing-library/react';
import CustomDatePhoto from '../Pages/CustomDatePhoto';

describe('Photo of custom day', () => {
    test('must show an img', () => {
        render(<CustomDatePhoto />);
        const img = screen.getByAltText('CustomDatePhoto');
        expect(img).toBeInTheDocument();
    }) 
});