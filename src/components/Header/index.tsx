import { ChangeEvent } from "react";
import Select from "../../components/Select";
const Header = () => {
  return (
    <div className="flex bg-[#4a514e] sticky top-0 z-50 justify-between">
      <div className="flex justify-center items-center p-2 sm:px-0 cursor-pointer">
        <h1
          className={`text-2xl sm:text-xl font-roboto text-white border-r-2 px-4 sm:px-2`}>
          IX
        </h1>
      </div>
    </div>
  );
};

export default Header;
