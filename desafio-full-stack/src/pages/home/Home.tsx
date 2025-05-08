import { useState, useEffect } from "react";
import api from "../../api/api";
import TableMain from "../../components/TableMain";
import { MapMain } from "../../components/MapMain";
import { columns, type DataCars, type DataCarsLocation } from "../types/types";
import { HeaderMain } from "../../components/HeaderMain";
import { NavbarMain } from "../../components/NavbarMain";
import { Toaster, toast } from 'react-hot-toast';
import { MapGoogle } from "../../components/MapGoogle";

export const Home = () => {
    const [cars, setCars] = useState<DataCars[]>([]);
    const [carsFiltereds, setCarsFiltereds] = useState<DataCars[]>(cars);
    const [carsLocation, setCarsLocation] = useState<DataCarsLocation[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [filterWord, setFilterWord] = useState('')
    const [page, setPage] = useState<number>(1)
    /* const handleFilter = (filter: string) => {
        const filteredDatas = carsFiltereds.filter(car => car.plate.includes(filter) || car.fleet.includes(filter))
        setCarsFiltereds(filteredDatas)
    } */
    useEffect(() => {
  if (filterWord.trim() === "") {
    setCarsFiltereds(cars);
  } else {
    const word = filterWord.toLowerCase();
    const result = cars.filter((item) =>
      item.plate.toLowerCase().includes(word) ||
      item.fleet?.toLowerCase().includes(word)  
    );
    setCarsFiltereds(result);
  }
}, [filterWord, cars]);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const handleRadioChange = (index: number) => {
        setSelectedIndex(index);
    };
     
    const handleLoadingDatas = async () => {
         //const token = process.env.TOKEN
         try{
            const response = await api.get(`/vehicles/list-with-paginate`,{
                params: {
                    type: 'tracked',
                    page: page, 
                    perPage: 5
                },
            });
            toast.success('Dados carregados com Sucesso!')
            setLoading(true)
            setCars(prev => [...prev, ...response.data.content.vehicles]);
            setCarsLocation(prev => [...prev, ...response.data.content.locationVehicles]);
        }catch(error){
            toast.error('Erro ao carregar os dados!');
            console.error(error)
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

        // Quando o usuário estiver a 100px do final
        if (scrollTop + windowHeight >= fullHeight - 30) {
        setPage(prev => prev + 1);
        }
        /* else{
            setPage(prev=> prev - 1)
        } */
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (<>
    <Toaster/>
    <div className="flex flex-col gap-1 justify-center justify-items-center-safe bg-[#001622]">
        <HeaderMain name="Neander Danubio" />
        <NavbarMain name="Lista" handleRadioChange={handleRadioChange} selectedIndex={selectedIndex} setFilterWord={setFilterWord} />
        {/* <MapMain datasCar={carsLocation} /> */}
         <MapGoogle datasCar={carsLocation} />
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
