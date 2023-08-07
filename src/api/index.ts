import axios, { AxiosResponse } from "axios";

export const getRequestRover = async (
  camera: string,
  sol: number,
  page: number,
  earth_date?: string
): Promise<AxiosResponse | { data: any; status: number; success: boolean }> => {
  console.log(process.env.REACT_APP_API_URL)
  const url = `http://localhost:4000/api/rover?page=${page}&camera=${camera}&sol=${sol}${earth_date ? "&earth_date=" + earth_date : ""}`;
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
