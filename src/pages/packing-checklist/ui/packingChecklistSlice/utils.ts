export const addNumberOfItems = (
  item: string,
  numberOfDays: number,
  divider: number
): string => {
  const numberToAdd = Math.ceil(numberOfDays / divider);

  return numberToAdd > 1 ? `${item} ×${numberToAdd}` : item;
};
