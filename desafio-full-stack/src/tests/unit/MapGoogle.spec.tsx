import { render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import { MapGoogle } from "../../components/MapGoogle";
import "@testing-library/jest-dom/vitest";
describe("MapGoogle", () => {
    
    it("if I to pass the empty dataCars props", () => {
        render(<MapGoogle datasCar={[]} />);
        const map = screen.getByTestId("map-google");
        expect(map).toBeInTheDocument();
    });
    it("if I don't to pass the dataCars props", () => {
        render(<MapGoogle datasCar={[]} />);
        const map = screen.getByTestId('map-google');
        expect(map).toBeInTheDocument();
        expect(map).toBeEmptyDOMElement();
    });
});
