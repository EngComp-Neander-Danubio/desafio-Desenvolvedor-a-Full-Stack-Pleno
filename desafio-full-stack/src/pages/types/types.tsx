import type { ColumnProps } from "../../components/TableMain";

export type DataCars = {
    id: string;
    plate: string;
    fleet: string;
    type: string;
    model: string;
    status: string;
    latitude: number;
    longitude: number;
};
export type DataCarsLocation = {
    id: string;
    equipmentId: string;
    name: string;
    plate: string;
    fleet: string;
    type: number;
    model: string;
    ignition: string;
    lat: number;
    lng: number;
};
export const columns: Array<ColumnProps<DataCars>> = [
    /* {
      key: "id",
      title: "ID",
    }, */
    {
        key: "plate",
        title: "Placa",
    },
    {
        key: "fleet",
        title: "Frota",
    },
    {
        key: "model",
        title: "Modelo",
    },
    {
        key: "nameOwner",
        title: "Proprietário",
    },
    {
        key: "type",
        title: "Tipo",
        render: (_, record) => {
            return (
            <>
            {record.type === 'vehicle' ? 'Veículo' : 'null'}
            </>           
        )},
    },
    {
        key: "status",
        title: "Status",
        render: (_, record) => {
            return (
            <>
            {record.status === 'active' ? 'Ativo' : 'Inativo'}
            </>           
        )},
    },
];