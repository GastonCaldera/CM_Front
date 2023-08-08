export type DataImageType = {
  id: string;
  sol: number;
  img_src: string;
  camera: CameraType;
};

export type CameraType = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};
