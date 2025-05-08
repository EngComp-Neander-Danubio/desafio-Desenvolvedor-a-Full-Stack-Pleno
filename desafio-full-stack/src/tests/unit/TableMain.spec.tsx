import { render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import TableMain, { type ColumnProps }  from "../../components/TableMain";
import "@testing-library/jest-dom/vitest";
import type { DataCars } from "../../pages/types/types";

const mockColumns = [
  { key: 'marca', label: 'Marca' },
  { key: 'modelo', label: 'Modelo' },
];

const mockData: DataCars= [
  { marca: 'Toyota', modelo: 'Corolla' },
  { marca: 'Honda', modelo: 'Civic' },
];

describe("TableMain", () => {
    it("if I to pass the empty dataCars props", () => {
        render(<TableMain columns={mockColumns} data={[]} />);
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
        expect(table).toBeTruthy()
    });

    it("if I to pass the no empty dataCars props", () => {
        render(<TableMain columns={mockColumns} data={mockData} />);
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
        expect(table).toBeTruthy()
    });

    it("if I don't to pass the dataCars props", () => {
        render(<TableMain />);
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
        expect(table).toBeEmptyDOMElement();
    });
});
