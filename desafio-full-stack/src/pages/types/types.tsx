import type { ColumnProps } from '../../components/TableMain';
import { PiMapPinLine } from 'react-icons/pi';
export type DataCars = {
    id: string;
    plate: string;
    fleet: string;
    type: string;
    model: string;
    status: string;
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
    createdAt: string;
};

export const columns: Array<ColumnProps<DataCars>> = [
    /* {
      key: "id",
      title: "ID",
    }, */
    {
        key: 'plate',
        title: 'Placa',
    },
    {
        key: 'fleet',
        title: 'Frota',
    },
    {
        key: 'model',
        title: 'Modelo',
    },
    {
        key: 'nameOwner',
        title: 'Proprietário',
    },
    {
        key: 'type',
        title: 'Tipo',
        render: (_, record) => {
            return <>{record.type === 'vehicle' ? 'Veículo' : record.type}</>;
        },
    },
    {
        key: 'status',
        title: 'Status',
        render: (_, record) => {
            return <>{record.status === 'active' ? 'Ativo' : 'Inativo'}</>;
        },
    },
    {
        key: 'action',
        title: 'Ações',
        render: (_, record) => {
            return (
                <>
                    {
                        <div
                            key={record.id}
                            className="flex items-center justify-center hover:cursor-pointer"
                        >
                            <PiMapPinLine size={20} />
                        </div>
                    }
                </>
            );
        },
    },
];
