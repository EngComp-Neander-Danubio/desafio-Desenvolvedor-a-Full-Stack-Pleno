import type React from 'react';
import { IoIosRefresh } from 'react-icons/io';
interface Iprops {
    handleClick?: () => void;
}
export const IconRefresh: React.FC<Iprops> = ({ handleClick }) => {
    return (
        <div className="flex items-center justify-center hover:cursor-pointer bg-blend-color-white">
            <IoIosRefresh
                className="text-white"
                size={24}
                onClick={handleClick}
                title={`Atualizar`}
            />
        </div>
    );
};
