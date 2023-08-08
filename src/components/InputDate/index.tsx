import { ChangeEvent } from "react";
import { InputProps } from "@/type";
import moment from "moment";
const InputDate = ({ inputValue, setInputValue = () => {} }: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex text-sm lg:text-base text-white p-2 items-center uppercase">
      <span>Date</span>
      <input
        className="text-black ml-4 rounded-md text-center outline-none w-full"
        type="date"
        value={inputValue}
        max={moment().format("YYYY-MM-DD")}
        onChange={(e) => {
          handleInputChange(e);
        }}></input>
    </div>
  );
};

export default InputDate;
