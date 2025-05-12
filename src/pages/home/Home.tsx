import { useState, useEffect, useRef } from 'react';
import api from '../../api/api';
import TableMain, { type ColumnProps } from '../../components/TableMain';
import { type DataCars, type DataCarsLocation } from '../types/types';
import { HeaderMain } from '../../components/HeaderMain';
import { NavbarMain } from '../../components/NavbarMain';
import { Toaster, toast } from 'react-hot-toast';
import { MapGoogle } from '../../components/MapGoogle';
import { PiMapPinLine } from 'react-icons/pi';

export const Home = () => {
    const [cars, setCars] = useState<DataCars[]>([]);
    const [carsFiltereds, setCarsFiltereds] = useState<DataCars[]>(cars);
    const [carsLocation, setCarsLocation] = useState<DataCarsLocation[]>([]);
    const [carsLocationFiltered, setCarsLocationFiltered] =
        useState<DataCarsLocation[]>(carsLocation);
    const [loading, setLoading] = useState<boolean>(false);
    const [filterWord, setFilterWord] = useState('');
    const [page, setPage] = useState<number>(1);
    const mapRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };

    const handleLoadingCarLocation = (plate: string | number) => {
        const car = carsLocation.filter(item => item.plate === plate);
        if (plate) {
            setCarsLocationFiltered(car);
        } else {
            setCarsLocationFiltered(carsLocation);
        }
    };
    const handleRefresh = () => {
        setCarsLocationFiltered(carsLocation);
    };
    const columns: Array<ColumnProps<DataCars>> = [
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
                return (
                    <>{record.type === 'vehicle' ? 'Veículo' : record.type}</>
                );
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
                                title={`visualizar ${record.plate}`}
                            >
                                <PiMapPinLine
                                    size={20}
                                    onClick={() => {
                                        handleLoadingCarLocation(record.plate);
                                        mapRef.current?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }}
                                />
                            </div>
                        }
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        if (filterWord.trim() === '') {
            setCarsFiltereds(cars);
            setCarsLocationFiltered(carsLocation);
        } else {
            const word = filterWord.toLowerCase();
            const resultcars = cars.filter(
                item =>
                    item.plate.toLowerCase().includes(word) ||
                    item.fleet?.toLowerCase().includes(word),
            );
            const resultsCarsLocation = carsLocation.filter(
                item =>
                    item.plate.toLowerCase().includes(word) ||
                    item.fleet?.toLowerCase().includes(word),
            );
            setCarsFiltereds(resultcars);
            setCarsLocationFiltered(resultsCarsLocation);
        }
    }, [filterWord, cars]);

    const handleLoadingDatas = async () => {
        try {
            const response = await api.get(`/vehicles/list-with-paginate`, {
                params: {
                    type: selectedIndex === 0 ? 'tracked' : '',
                    page: page,
                    perPage: 20,
                },
            });
            toast.success('Dados carregados com Sucesso!');
            setLoading(true);
            setCars(prev => [...prev, ...response.data.content.vehicles]);
            setCarsLocation(prev => [
                ...prev,
                ...response.data.content.locationVehicles,
            ]);
        } catch (error) {
            toast.error('Erro ao carregar os dados!');
            console.error(error);
        }
    };

    useEffect(() => {
        handleLoadingDatas();
        const timeout = setTimeout(() => {
            handleLoadingDatas();
        }, 2000 * 60);

        return () => clearTimeout(timeout);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            if (scrollTop + windowHeight >= fullHeight - 30) {
                setPage(prev => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Toaster />
            <div className="flex flex-col gap-1 p-5 justify-center justify-items-center-safe bg-[#001622]">
                <HeaderMain name={`${import.meta.env.NAME}`} />
                <NavbarMain
                    name="Lista"
                    handleRadioChange={handleRadioChange}
                    selectedIndex={selectedIndex}
                    setFilterWord={setFilterWord}
                />
                {/* <MapMain datasCar={carsLocation} /> */}
                <MapGoogle
                    refresh={handleRefresh}
                    ref={mapRef}
                    datasCar={carsLocationFiltered}
                />
                {loading ? (
                    <TableMain data={carsFiltereds} columns={columns} />
                ) : (
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </>
    );
};
