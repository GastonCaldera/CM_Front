import { ChangeEvent, useState } from "react";
import { InputProps } from "@/type/inputProps";
const SolInput = ({ inputValue, setInputValue = () => {} }: InputProps) => {
  const [timer, setTimer] = useState<number>(0);
  const [value, setValue] = useState<string>(inputValue);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 0) {
      setValue("0");
      clearTimeout(timer);

      setTimeout(() => {
        setInputValue("0");
      }, 500);
      setTimer(500);
    } else if (parseInt(e.target.value) >= 1000) {
      setValue("1000");
      clearTimeout(timer);

      setTimeout(() => {
        setInputValue("1000");
      }, 500);
      setTimer(500);
    } else {
      setValue(e.target.value);
      clearTimeout(timer);

      setTimeout(() => {
        setInputValue(e.target.value);
      }, 500);
      setTimer(500);
    }
  };
  return (
    <div className="flex text-sm lg:text-base text-white p-2 items-center uppercase">
      <span>Sol</span>
      <input
        onChange={(e) => {
          handleInputChange(e);
        }}
        className="text-black ml-4 rounded-md text-center outline-none w-full"
        type="number"
        value={value}
        min={0}
        max={1000}></input>
    </div>
  );
};

export default SolInput;
