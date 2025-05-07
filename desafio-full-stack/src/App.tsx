import { useState } from "react";
import "./App.css";
import { IconCar } from "./components/IconCar";
import TableMain, { type ColumnProps } from "./components/TableMain";
import { MapMain } from "./components/MapMain";


export type DataPostos = {
  id?: string;
    placa: string;
    frota: string;
    tipo: number;
    modelo: string;
    status: string;
};
const data = [
  {
    "id": "1",
    "placa": "ABC-1234",
    "frota": "F001",
    "tipo": 1,
    "modelo": "Volvo FH 540",
    "status": "Ativo"
  },
  {
    "id": "2",
    "placa": "DEF-5678",
    "frota": "F002",
    "tipo": 2,
    "modelo": "Scania R450",
    "status": "Manutenção"
  },
  {
    "id": "3",
    "placa": "GHI-9012",
    "frota": "F003",
    "tipo": 1,
    "modelo": "Mercedes-Benz Actros",
    "status": "Ativo"
  },
  {
    "id": "4",
    "placa": "JKL-3456",
    "frota": "F004",
    "tipo": 3,
    "modelo": "Iveco Stralis",
    "status": "Inativo"
  },
  {
    "id": "5",
    "placa": "MNO-7890",
    "frota": "F005",
    "tipo": 2,
    "modelo": "DAF XF",
    "status": "Reservado"
  }
]

function App() {
  const [count, setCount] = useState(0);
  const columns: Array<ColumnProps<DataPostos>> = [
    {
      key: "id",
      title: "ID",
    },
    {
      key: "placa",
      title: "Placa",
    },
    {
      key: "frota",
      title: "Frota",
    },
    {
      key: "tipo",
      title: "modelo",
    },
    {
      key: "status",
      title: "Status",
    },
    /* {
      key: "modalidade",
      title: "Modalidade",
      render: (_, record) => {
        const modalidadeData =
          optionsModalidade.find((m) => m.value === record.modalidade)?.label ||
          null;
        return (
          <>
            {modalidadeData?.toLowerCase() ?? record.modalidade.toLowerCase()}
          </>
        );
      },
    }, */
    {
      key: "acoes",
      title: "Ações",
      render: (_, record) => {
       
        return (
          <></>
        );
      },
    },
  ];
  return (
    <>
      {/* <IconCar />
      <TableMain data={data} columns={columns} /> */}
      <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Mapa de Localização</h1>
      <MapMain />
    </div>
    </>
  );
}

export default App;
