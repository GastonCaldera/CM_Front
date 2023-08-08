import "aos/dist/aos.css";
import { GridBoxProps } from "../../type";
import FooterImageBox from "../FooterImageBox";
import Image from "next/image";

export default function GridBox({ data }: GridBoxProps) {
  return (
    <div
      className={`cursor-pointer hover:brightness-110 w-full bg-[#474a51] drop-shadow-lg rounded-b break-inside-avoid-column
      rounded-t mb-8`}>
      <Image
        src={data.img_src}
        alt={data.img_src}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          borderRadius: "0.25rem 0.25rem 0 0",
        }}
      />
      <div className="rounded-b p-4">
        <FooterImageBox fullName={data.camera.full_name} />
      </div>
    </div>
  );
}
