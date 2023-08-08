import axios, { AxiosResponse } from "axios";

export const getRequestRover = async (
  type: string,
  camera: string,
  sol: string,
  page: number,
  earth_date?: string
): Promise<AxiosResponse | { data: any; status: number; success: boolean }> => {
  const url = `http://localhost:4000/api/rover?page=${page}&camera=${camera}&sol=${sol}&type=${type}${earth_date ? "&earth_date=" + earth_date : ""}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      data: error,
      status: 400,
      success: false,
    };
  }
};
