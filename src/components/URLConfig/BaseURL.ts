import { URL } from "../../interfaces/URL";

export let getProperURL: URL;
getProperURL = (
  root: string,
  itemTypeParam: string,
  page: string,
  optionValue: string,
  itemNumber: string
) => `${root}${itemTypeParam}${page}${optionValue}${itemNumber}`;

// export const getProperURL = (optionValue: string): string =>
//   `https://api.punkapi.com/v2/beers?page=${optionValue}&per_page=80`;
