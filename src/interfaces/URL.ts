interface URLElements {
  readonly root: string;
  itemTypeParam: string;
  pageParam: string;
  numberOfItemsParam: string;
  hopParam?: string;
  abvParam?: string;
}

interface BaseURL {
  (
    root: string,
    itemTypeParam: string,
    pageParam: string,
    optionParam: string,
    numberOfItemsParam: string
  ): string;
}

interface ExtendedURL {
  (
    root: string,
    itemTypeParam: string,
    pageParam: string,
    optionParam: string,
    numberOfItemsParam: string,
    hopParam: string,
    hopName: string,
    abvParam: string,
    abvValue: string
  ): string;
}

export { URLElements, BaseURL as URL, ExtendedURL as ExtraURL };
