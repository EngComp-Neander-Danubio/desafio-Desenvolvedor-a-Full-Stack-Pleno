import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { DataCarsLocation } from '../pages/types/types';
import React from 'react';

interface ICarsProps {
    datasCar: DataCarsLocation[];
}

export const MapMain: React.FC<ICarsProps> = ({ datasCar }) => {
    const calcMediaLatLong = (
        data: DataCarsLocation[],
        defaultCenter: [number, number] = [-23.55052, -46.63331], // São Paulo
    ): [number, number] => {
        if (!data.length) return defaultCenter;

        const total = data.reduce(
            (acc, cur) => {
                acc.lat += cur.lat;
                acc.lng += cur.lng;
                return acc;
            },
            { lat: 0, lng: 0 },
        );
        const avgLat = total.lat / data.length;
        const avgLng = total.lng / data.length;
        return [avgLat, avgLng];
    };
    const CarMarkers = React.memo(({ datasCar }: ICarsProps) => (
        <>
            {datasCar.map(car => (
                <Marker
                    key={car.id}
                    position={[car.lat, car.lng] as LatLngExpression}
                >
                    <Popup>
                        <div>
                            <strong>Placa:</strong> {car.plate} <br />
                            <strong>Modelo:</strong> {car.model} <br />
                            <strong>Status:</strong> {car.ignition}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    ));

    const center: LatLngExpression = calcMediaLatLong(datasCar);
    return (
        <>
            <div className="flex items-center justify-center h-[20px]">
                <hr className="border-t-2 border-[#002D44] w-full max-w-[1700px]" />
            </div>
            <div className="w-full max-w-[1700px] mx-auto p-10 border-2 rounded-[16px] border-[#002D44]">
                <h2 className="text-white text-xl font-bold mb-4">
                    Mapa Rastreador
                </h2>
                <MapContainer
                    center={center}
                    zoom={13}
                    style={{ height: '500px', width: '100%' }}
                    scrollWheelZoom={true}
                    className="h-full rounded-lg shadow bg-customBackground border-[1px] border-customBorder"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CarMarkers datasCar={datasCar} />
                </MapContainer>
            </div>
        </>
    );
};
