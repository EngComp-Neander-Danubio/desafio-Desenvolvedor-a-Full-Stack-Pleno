import { useState, useEffect } from "react";
import api from "../../api/api";
import TableMain from "../../components/TableMain";
import { MapMain } from "../../components/MapMain";
import { columns, type DataCars, type DataCarsLocation } from "../types/types";
import { HeaderMain } from "../../components/HeaderMain";
import { NavbarMain } from "../../components/NavbarMain";

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
         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MTVmOWE3LTk0ZmEtNDBmYy04Nzc3LWU3YTMxNzVjYmYwZCIsIm5hbWUiOiJJc2FiZWxsaSBOYXZhcnJvIiwiZG9jdW1lbnQiOiIzNTgwNzI0NTI1MyIsImVtYWlsIjoidGVzdGVAdHJhLmNvbSIsInBob25lIjoiMTE5Nzc4OTY1NDMiLCJzdGF0dXMiOiJhY3RpdmUiLCJpc01hc3RlciI6dHJ1ZSwiYXZhdGFyVXJsIjoiaHR0cHM6Ly9jbmQtdHJ1Y2tlcnBheS5zZm8zLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vcm90b2dyYW1hLzZlOWFjYjIxMWI4NTFjYjBiMGZiZGNkMTVjZTFiODFjLndlYnAiLCJjb3Jwb3JhdGVJZCI6IjEzM2MzZWVlLTA2NDktNDY1Yi1hZWUyLWQ1N2FjZjViNWIyZiIsImNyZWF0ZWRBdCI6IjIwMjUtMDQtMTFUMTM6MDA6MjMuNjk3WiIsInBlcm1pc3Npb25zIjpbImRyaXZlci1saW5rLWRlbGV0ZSIsImRhc2hib2FyZCIsImRyaXZlciIsImRyaXZlci1yZWdpc3RyYXRpb25zLWludml0ZSIsImRyaXZlci11bmxpbmsiLCJkcml2ZXItbGluay1jcmVhdGUiLCJkcml2ZXItbGluay1lZGl0IiwidmVoaWNsZS1yZWdpc3RyYXRpb25zIiwidmVoaWNsZS1yZWdpc3RyYXRpb25zLXZpZXciLCJ2ZWhpY2xlLXJlZ2lzdHJhdGlvbnMtZWRpdCIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1yZWdpc3RlciIsInZlaGljbGUtcmVnaXN0cmF0aW9ucy1kZWxldGUiLCJwbGFjZXMiLCJwbGFjZXMtdmlldyIsInBsYWNlcy1lZGl0IiwicGxhY2VzLXJlZ2lzdGVyIiwicGxhY2VzLWRlbGV0ZSIsInJvdXRlcyIsInJvdXRlcy1yZWdpc3RlciIsInJvdXRlcy1kZWxldGUiLCJyb3V0ZXMtZWRpdCIsInJvdXRlcy12aWV3IiwidHJpcHMiLCJ0cmlwcy12aWV3IiwidHJpcHMtY2FuY2VsIiwidHJpcHMtZWRpdCIsInRyaXBzLWRlbGV0ZSIsInRyaXBzLWNoYXQiLCJyZXBvcnRzIiwicmVwb3J0cy12aWV3IiwicmVwb3J0cy1kb3dubG9hZCIsImFsZXJ0LWNvbmZpZ3VyYXRpb24iLCJhbGVydC1jb25maWd1cmF0aW9uLXZpZXciLCJvcGVyYXRvcnMiLCJvcGVyYXRvcnMtY3JlYXRlIiwib3BlcmF0b3JzLXZpZXciLCJhbGVydHMiLCJhbGVydHMtdmlldyIsIm9wZXJhdG9ycy1lZGl0Iiwib3BlcmF0b3JzLWRlbGV0ZSIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMtdmlldyIsInBlcm1pc3Npb25zLWVkaXQiLCJwZXJtaXNzaW9ucy1kZWxldGUiLCJwZXJtaXNzaW9ucy1jcmVhdGUiLCJpcy1jYXJyaWVyIiwidHJpcHMtY3JlYXRlIiwiY2hlY2tsaXN0IiwiY2hlY2tsaXN0LXZpZXciLCJjaGVja2xpc3QtdG8tY29tcGxldGUiXSwiaWF0IjoxNzQ2NTg0NTEyLCJleHAiOjE3NDc0NDg1MTJ9.qFYx9A8CDyvnYQlKItnaAsfulDhdE2aWeaTAoycS-yY";

        const response = await api.get(`/vehicles/list-with-paginate`,{
            params: {
                type: 'tracked',
                page: page, 
                perPage: 10
            },headers: {
            Authorization: token, 
            }
        });
        setLoading(true)
        setCars(prev => [...prev, ...response.data.content.vehicles]);
        setCarsLocation(response.data.content.locationVehicles);
    };

    useEffect(() => {
        handleLoadingDatas();
    }, [page]);

    useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        // Quando o usuário estiver a 100px do final
        if (scrollTop + windowHeight >= fullHeight - 100) {
        setPage(prev => prev + 1);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (
    <div className="flex flex-col gap-1 justify-center bg-customBackground">
        <HeaderMain name="Neander Danubio" />
        <NavbarMain name="Lista" handleRadioChange={handleRadioChange} selectedIndex={selectedIndex} setFilterWord={setFilterWord} />
        <MapMain datasCar={carsLocation} />
        {loading ? (
                <TableMain data={carsFiltereds} columns={columns} />
        ) : (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            </div>
        )}
    </div>
);

};
