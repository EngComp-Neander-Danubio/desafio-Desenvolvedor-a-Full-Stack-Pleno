import type React from 'react';
import { IoHome } from 'react-icons/io5';
interface Iprops {
    handleClick?: () => void;
}
export const IconRefresh: React.FC<Iprops> = ({ handleClick }) => {
    return (
        <div className="flex items-center justify-center hover:cursor-pointer bg-blend-color-white">
            <IoHome
                className="text-white"
                size={24}
                onClick={handleClick}
                title={`Início`}
            />
        </div>
    );
};
