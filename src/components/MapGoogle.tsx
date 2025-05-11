import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from '@react-google-maps/api';
import type { DataCarsLocation } from '../pages/types/types';
import { formatDateTime } from '../utils/formatDateTime';
import { getTruckIcon } from '../icons/truckIcon';
import { IconRefresh } from './IconRefresh';

interface ICarsProps {
    datasCar: DataCarsLocation[];
    refresh?: () => void;
}

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '16px',
};

export const MapGoogle = forwardRef<HTMLDivElement, ICarsProps>(
    ({ datasCar, refresh }, ref) => {
        const [map, setMap] = useState<google.maps.Map | null>(null);
        const [selectedCar, setSelectedCar] = useState<DataCarsLocation>();

        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: `${import.meta.env.VITE_API_GOOGLE}`,
        });

        const onLoad = useCallback((mapInstance: google.maps.Map) => {
            setMap(mapInstance);
        }, []);

        useEffect(() => {
            if (map && datasCar.length > 0) {
                const bounds = new google.maps.LatLngBounds();

                datasCar.forEach(car => {
                    bounds.extend({ lat: car.lat, lng: car.lng });
                });

                map.fitBounds(bounds);
            }
        }, [map, datasCar]);
        if (!isLoaded) return null;
        return isLoaded ? (
            <>
                <div
                    ref={ref}
                    className="flex items-center justify-center h-[20px]"
                >
                    <hr className="border-t-2 border-[#002D44] w-full max-w-[1700px]" />
                </div>
                <div className="w-full max-w-[1700px] mx-auto p-10 border-2 rounded-[16px] border-[#002D44]">
                    <div className="flex flex-row items-center gap-[10px] mb-4">
                        <h2 className="text-white text-xl font-bold">
                            Mapa Rastreador
                        </h2>
                        <IconRefresh handleClick={refresh} />
                    </div>
                    <GoogleMap
                        data-testid="map-google"
                        mapContainerStyle={containerStyle}
                        onLoad={onLoad}
                    >
                        {datasCar &&
                            datasCar.map((car, index) => (
                                <Marker
                                    key={index}
                                    position={{ lat: car.lat, lng: car.lng }}
                                    onClick={() => setSelectedCar(car)}
                                    icon={
                                        car.ignition.includes('Ligado')
                                            ? getTruckIcon('#3AAA29')
                                            : car.ignition.includes('Desligado')
                                              ? getTruckIcon('#F04D1A')
                                              : getTruckIcon('#FFD13F')
                                    }
                                />
                            ))}

                        {datasCar && datasCar.length > 0 && selectedCar && (
                            <InfoWindow
                                position={{
                                    lat: selectedCar.lat,
                                    lng: selectedCar.lng,
                                }}
                                onCloseClick={() => setSelectedCar(undefined)}
                                //options={{headerContent: null}}
                            >
                                <div className="flex flex-col text-black items-center justify-center">
                                    <strong>Placa:</strong> {selectedCar.plate}{' '}
                                    <br />
                                    <strong>Frota:</strong> {selectedCar.fleet}{' '}
                                    <br />
                                    <div className="flex gap-[1px]">
                                        {
                                            <div>
                                                {
                                                    formatDateTime(
                                                        selectedCar.createdAt,
                                                    ).date
                                                }
                                            </div>
                                        }
                                        <div>-</div>
                                        {
                                            <div>
                                                {
                                                    formatDateTime(
                                                        selectedCar.createdAt,
                                                    ).time
                                                }
                                            </div>
                                        }
                                        <br />
                                    </div>
                                    <div className="flex gap-[1px]">
                                        {selectedCar.lat}
                                        <div>,</div>
                                        {selectedCar.lng}
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                    {/*  </LoadScript> */}
                </div>
            </>
        ) : (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    },
);
