import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

type Data = {
  id: string;
  plate: string;
  fleet: string;
  type: number;
  model: string;
  status: string;
  latitude: number;
  longitude: number;
};

interface ICarsProps {
  datasCar: Data[];
}

export const MapMain: React.FC<ICarsProps> = ({ datasCar }) => {
  const center: LatLngExpression = [-3.71722, -38.5433]; // Fortaleza, CE

  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow bg-customBackground border-[1px] border-customBorder rounded-[16px]"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {datasCar.map((car) => (
          <Marker
            key={car.id}
            position={[car?.latitude, car?.longitude] as LatLngExpression}
          >
            <Popup>
              <div>
                <strong>Placa:</strong> {car.plate} <br />
                <strong>Modelo:</strong> {car.model} <br />
                <strong>Status:</strong> {car.status}
              </div>
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
};
