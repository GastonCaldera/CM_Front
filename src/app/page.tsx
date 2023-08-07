"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { DataImageType } from "@/type";
import { getRequestRover } from "@/api";
import GridImages from "@/components/GridImages";

export default function Home() {
  const [dataImages, setDataImages] = useState<DataImageType[]>([]);
  useEffect(() => {
    const myCallFunction = async () => {
      try {
        const response = await getRequestRover("FHAZ", 1000, 1);
        setDataImages(response.data);
      } catch (error) {
        setDataImages([]);
      }
    };
    myCallFunction();
  }, []);
  return (
    <main className="min-h-screen">
      <Header />
      <GridImages data={dataImages} />
    </main>
  );
}
