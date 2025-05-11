import { render, screen } from '@testing-library/react';
import { expect, vi, describe } from 'vitest';
import { MapGoogle } from '../../components/MapGoogle';
import '@testing-library/jest-dom/vitest';
import type { DataCarsLocation } from '../../pages/types/types';

const mockData: DataCarsLocation[] = [
    {
        id: '1',
        equipmentId: 'EQP-001',
        name: 'Caminhão Alpha',
        plate: 'ABC1D23',
        fleet: 'Frota A',
        type: 1,
        model: 'Volvo FH',
        ignition: 'on',
        lat: -23.55052,
        lng: -46.63331,
        createdAt: '2025-05-08T12:00:00Z',
    },
    {
        id: '2',
        equipmentId: 'EQP-002',
        name: 'Van Beta',
        plate: 'XYZ9Z99',
        fleet: 'Frota B',
        type: 2,
        model: 'Mercedes Sprinter',
        ignition: 'off',
        lat: -22.90685,
        lng: -43.1729,
        createdAt: '2025-05-07T14:30:00Z',
    },
    {
        id: '3',
        equipmentId: 'EQP-003',
        name: 'Carro Gamma',
        plate: 'KLM2R45',
        fleet: 'Frota C',
        type: 3,
        model: 'Fiat Uno',
        ignition: 'on',
        lat: -19.8157,
        lng: -43.9542,
        createdAt: '2025-05-06T08:15:00Z',
    },
];
vi.mock('@react-google-maps/api', () => ({
    LoadScript: ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
    ),
    GoogleMap: (props: { children?: React.ReactNode }) => (
        <div data-testid="map-google">{props.children}</div>
    ),
    Marker: () => <div data-testid="map-marker" />,
    useJsApiLoader: () => ({
        isLoaded: true,
    }),
}));

describe('MapGoogle', async () => {
    it('if I to pass the empty dataCars props, the map should be rendered', async () => {
        render(<MapGoogle datasCar={[]} />);
        const map = screen.queryByTestId('map-google');
        expect(map).toBeInTheDocument();
    });
    it("if I don't to pass the dataCars props, the map should be rendered", async () => {
        render(
            <MapGoogle datasCar={undefined as unknown as DataCarsLocation[]} />,
        );
        const map = screen.queryByTestId('map-google');
        expect(map).toBeInTheDocument();
    });

    it('if I to pass the dataCars props, the map should be rendered', async () => {
        render(<MapGoogle datasCar={mockData} />);
        const map = screen.queryByTestId('map-google');
        expect(map).toBeInTheDocument();
    });
});
