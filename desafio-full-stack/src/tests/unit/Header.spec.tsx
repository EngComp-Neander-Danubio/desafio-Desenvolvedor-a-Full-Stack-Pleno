import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { HeaderMain } from '../../components/HeaderMain';
import '@testing-library/jest-dom/vitest';
describe('HeaderMain', () => {
    it("If I don't to pass name props", () => {
        render(<HeaderMain />);
        const div = screen.queryByRole('h1', { name: 'h1-header-main' });
        expect(div).toBeNull();
        //expect(div).toBeEmptyDOMElement();
    });

    it('If I to pass name props', () => {
        const name = 'Neander Danubio';
        render(<HeaderMain name={name} />);
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});
