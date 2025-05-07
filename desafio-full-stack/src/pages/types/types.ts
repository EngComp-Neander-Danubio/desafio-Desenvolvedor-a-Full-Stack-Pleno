import type { ColumnProps } from "../../components/TableMain";

export type Data = {
    id: string;
    plate: string;
    fleet: string;
    type: number;
    model: string;
    status: string;
    latitude: number;
    longitude: number;
};
export const columns: Array<ColumnProps<Data>> = [
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
    },
    {
        key: "status",
        title: "Status",
    },
];