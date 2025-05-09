import { fireEvent, render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import { InputSearch } from '../../components/InputSearch';
import '@testing-library/jest-dom/vitest';
describe('InputMain', () => {
    const handleChange = vi.fn();

    it('if I to pass the placeholder props, the input should be rendered', () => {
        render(
            <InputSearch
                placeholder={'Buscar por placa ou frota'}
                onClick={handleChange}
            />,
        );
        expect(
            screen.getByPlaceholderText('Buscar por placa ou frota'),
        ).toBeInTheDocument();
    });

    it('if I to pass the label and placeholder props, the input should be rendered', () => {
        render(
            <InputSearch
                label="label"
                placeholder={'Buscar por placa ou frota'}
            />,
        );
        expect(
            screen.getByPlaceholderText('Buscar por placa ou frota'),
        ).toBeInTheDocument();
    });

    it("if I don't to pass the label and placeholder props, the input should be rendered", () => {
        render(<InputSearch />);
        const input = screen.queryByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    it("if I don't to pass or pass the handleChange function props, the component should be rendered", () => {
        const handleChange = vi.fn();
        render(
            <InputSearch
                placeholder={'Buscar por placa ou frota'}
                label="label"
                onChange={handleChange}
            />,
        );
        const input = screen.getByPlaceholderText('Buscar por placa ou frota');
        fireEvent.change(input, { target: { value: 'teste' } });
        expect(handleChange).toHaveBeenCalled();
    });
});
