import "aos/dist/aos.css";
import { footerImageBoxProps } from "../../type";

export default function FooterImageBox({ fullName }: footerImageBoxProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <h1 className="ml-2 text-base font-semibold text-white">{fullName}</h1>
      </div>
    </div>
  );
}
