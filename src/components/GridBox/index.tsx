import "aos/dist/aos.css";
import { GridBoxProps } from "../../type";
import FooterImageBox from "../FooterImageBox";
import Image from "next/image";

export default function GridBox({ index, data }: GridBoxProps) {
  return (
    <div
      className={`cursor-pointer hover:brightness-110 w-full bg-[#474a51] drop-shadow-lg rounded-b break-inside-avoid-column
      `}>
      <Image
        src={data.img_src}
        alt={data.img_src}
        className="rounded-t"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '100%' }} // optional
      />
      {/* <div className="rounded-b p-4">
        <FooterImageBox
          ups={data.ups}
          comment_count={data.comment_count}
          views={data.views}
        />
      </div> */}
    </div>
  );
}
