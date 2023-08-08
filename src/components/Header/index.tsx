import { ChangeEvent } from "react";
import Select from "../../components/Select";
import { HeaderProps } from "@/type";
import { optionsCamera, optionsType } from "../../data";
import { filterOptions } from "@/utils/functions";
import SolInput from "../SolInput";
import InputDate from "../InputDate";
const Header = ({
  selectedOptionCamera,
  setSelectedOptionCamera,
  selectedOptionType,
  setSelectedOptionType,
  sol,
  setSol,
  date,
  setDate
}: HeaderProps) => {
  const handleChangeCamera = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionCamera(e.target.value);
  };
  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionCamera("all");
    setSelectedOptionType(e.target.value);
  };
  return (
    <div className="flex bg-[#4a514e] sticky top-0 z-50 justify-between">
      <div className="flex justify-center items-center p-2 sm:px-0 cursor-pointer">
        <h1
          className={`text-2xl sm:text-xl font-roboto text-white border-r-2 px-4 sm:px-2 h-full flex items-center`}>
          CM
        </h1>
      </div>
      <div className="flex flex-col justify-between bg-[#4a514e] px-2 w-full md:flex-row">
        <Select
          options={filterOptions(selectedOptionType, optionsCamera)}
          value={selectedOptionCamera}
          onChange={handleChangeCamera}
          width={60}
        />
        <Select
          options={optionsType}
          value={selectedOptionType}
          onChange={handleChangeType}
          width={10}
        />
        <SolInput inputValue={sol} setInputValue={setSol} />
        <InputDate inputValue={date} setInputValue={setDate} />
      </div>
    </div>
  );
};

export default Header;
