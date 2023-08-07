import "aos/dist/aos.css";
import { useEffect } from "react";
import { GridImagesProps, DataImageType } from "../../type";
import GridBox from "../GridBox";
const AOS = require("aos");

export default function GridImages({ data }: GridImagesProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="my-8 grid gap-4 grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-5 mb-8 container mx-auto"
      data-aos="fade-up"
      data-aos-delay="1200">
      {data?.map((item: DataImageType, index: number) => {
        return <GridBox key={index} data={item} index={index} />;
      })}
    </div>
  );
}
