import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import { InputSearch } from "../../components/InputSearch";
import "@testing-library/jest-dom/vitest";
describe("InputMain", () => {
    const handleChange = vi.fn();

    it("if I to pass the placeholder props", () => {
        render(
            <InputSearch
                placeholder={"Buscar por placa ou por frota"}
                onClick={handleChange}
            />
        );
        expect(
            screen.getByText(/"Buscar por placa ou frota"/i)
        ).toBeInTheDocument();
    });

    it("if I to pass the label props", () => {
        render(<InputSearch placeholder={"input"} onClick={handleChange} />);
        expect(screen.getByRole("nav")).toBeInTheDocument();
    });

    it("if I don't to pass the handleChange function props", () => {
        render(<InputSearch placeholder={"input"} />);
        const input = screen.getByRole("nav");
        expect(input).toBeInTheDocument();
    });
});
