import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
export const MapMain = () => {
    const position: LatLngExpression = [-3.71722, -38.5433]; // Fortaleza, CE
    return (
        <div className="h-[500px] w-full">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                className="h-full w-full rounded-lg shadow"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>Você está aqui: Fortaleza, CE.</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
