import { render, screen } from '@testing-library/react';
import { expect, describe } from 'vitest';
import TableMain from '../../components/TableMain';
import '@testing-library/jest-dom/vitest';

describe('TableMain', () => {
    it('if I to pass an empty vector of dataCars props, table should be rendered', () => {
        render(<TableMain columns={[]} data={[]} />);
        const table = screen.queryByRole('table');
        expect(table).toBeInTheDocument();
    });

    it('if I to pass the vector dataCars props, table should be rendered', () => {
        render(<TableMain columns={[]} data={[]} />);
        const table = screen.queryByRole('table');
        expect(table).toBeInTheDocument();
    });

    it("if I don't to pass the dataCars props, table should be rendered with message 'Nenhum dado'", () => {
        render(<TableMain columns={[]} />);
        const table = screen.queryByRole('table');
        expect(table).toBeInTheDocument();
    });
});
