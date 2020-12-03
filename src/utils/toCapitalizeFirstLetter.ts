export const toCapitalizeFirstLetter = (str: string): string => {
  const firstPart = str[0].toUpperCase();
  const secondPart = str
    .slice(1)
    .split('')
    .map((letter) => letter.toLowerCase())
    .join('');
  return `${firstPart}${secondPart}`;
};
