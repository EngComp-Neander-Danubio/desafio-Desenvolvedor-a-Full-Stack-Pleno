interface Iprops {
    index: number;
    label?: string;
    option: string;
    isChecked: boolean;
    handleRadioChange: (index: number) => void;
}
export const RadioButton: React.FC<Iprops> = ({
    index,
    label,
    option,
    isChecked,
    handleRadioChange,
}) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    name={`${label}`}
                    checked={isChecked}
                    onChange={() => handleRadioChange(index)}
                    className="form-radio text-blue-600 w-[24px] h-[24px]"
                />
                <span className="ml-2 text-gray-700 text-white">{option}</span>
            </label>
        </div>
    );
};
