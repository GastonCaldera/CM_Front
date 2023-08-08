"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { DataImageType } from "@/type";
import { getRequestRover } from "@/api";
import GridImages from "@/components/GridImages";
import Title from "@/components/Title";
import Loader from "@/components/Loader";
import NoPhotosFound from "@/components/NoPhotosFound";
import moment from "moment"

export default function Home() {
  const [dataImages, setDataImages] = useState<DataImageType[]>([]);
  const [sol, setSol] = useState<string>("0");
  const [date, setDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOptionType, setSelectedOptionType] =
    useState<string>("curiosity");
  const [selectedOptionCamera, setSelectedOptionCamera] =
    useState<string>("all");
  useEffect(() => {
    const myCallFunction = async () => {
      try {
        setLoading(true);
        const response = await getRequestRover(
          selectedOptionType,
          selectedOptionCamera,
          sol,
          1,
          date
        );
        setDataImages(response.data);
        setLoading(false);
      } catch (error) {
        setDataImages([]);
      }
    };
    myCallFunction();
  }, [selectedOptionType, selectedOptionCamera, sol, date]);
  return (
    <main className="min-h-screen">
      <Header
        selectedOptionType={selectedOptionType}
        setSelectedOptionType={setSelectedOptionType}
        selectedOptionCamera={selectedOptionCamera}
        setSelectedOptionCamera={setSelectedOptionCamera}
        sol={sol}
        setSol={setSol}
        date={date}
        setDate={setDate}
      />
      <Title />
      {loading ? (
        <Loader />
      ) : dataImages.length === 0 ? (
        <NoPhotosFound />
      ) : (
        <GridImages data={dataImages} />
      )}
    </main>
  );
}
