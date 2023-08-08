import { Option } from "../type";

export const optionsType: Option[] = [
  { value: "curiosity", label: "Curiosity" },
  { value: "opportunity", label: "Opportunity" },
  { value: "spirit", label: "spirit" },
];

export const optionsCamera: Option[] = [
  { value: "FHAZ", label: "Front Hazard" },
  { value: "RHAZ", label: "Rear Hazard" },
  { value: "MAST", label: "Mast" },
  { value: "CHEMCAM", label: "Chemistry" },
  { value: "MAHLI", label: "Mars Hand" },
  { value: "MARDI", label: "Mars Descent" },
  { value: "NAVCAM", label: "Navigation" },
  { value: "PANCAM", label: "Panoramic" },
  { value: "MINITES", label: "Miniature Thermal" },
  { value: "all", label: "All" },
];
