import { render, screen } from '@testing-library/react';
import { expect, vi, describe } from 'vitest';
import ButtonMain from '../../components/ButtonMain';
import '@testing-library/jest-dom/vitest';
describe('ButtonMain', () => {
    const handleClick = vi.fn();

    it('if I to pass the label props', () => {
        render(<ButtonMain label={'Novo'} onClick={handleClick} />);
        expect(screen.getByText('Novo')).toBeInTheDocument();
    });
    it("if I don't to pass the label props, the button should be rendered", () => {
        render(
            <ButtonMain
                onClick={handleClick}
                label={undefined as unknown as string}
            />,
        );
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
        //expect(button).toHaveAttribute('label', undefined)
    });
});
