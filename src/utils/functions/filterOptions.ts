export const filterOptions = (type: string, options: { value: string, label: string }[]) => {
  const typeCuriosity = ["PANCAM", "MINITES"];
  const typeOther = ["MARDI", "MAHLI", "CHEMCAM", "MAST"];
  if (type === "curiosity") {
    return options.filter(
      (element: { value: string }) => !typeCuriosity.includes(element.value)
    );
  }
  return options.filter(
    (element: { value: string }) => !typeOther.includes(element.value)
  );
};
