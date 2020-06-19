import { URLElements } from "../../interfaces/URL";

export const URLBuilders: URLElements = {
  root: `https://api.punkapi.com/v2/`,
  itemTypeParam: `beers`,
  pageParam: `?page=`,
  numberOfItemsParam: `&per_page=80`,
  hopParam: `&hops=`,
  abvParam: `&abv_lt=`,
};
