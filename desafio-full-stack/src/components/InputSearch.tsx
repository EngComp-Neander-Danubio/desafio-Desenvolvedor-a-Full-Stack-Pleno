import type { InputProps } from '@headlessui/react';
import React from 'react';
import type { FieldError } from 'react-hook-form';

interface InputProp extends InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: FieldError | undefined;
}
export const InputSearch: React.FC<InputProp> = ({
    error,
    label,
    type,
    placeholder,
    onChange,
}) => {
    return (
        <div>
            <label
                htmlFor={label}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
            </label>
            <input
                id="input-search"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-[279px] h-[45px] px-3 py-2 border rounded-[8px] shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{
                    height: '2.5rem',
                }}
            />
            {error && error.message && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </div>
    );
};
