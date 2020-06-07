interface URLElements {
  readonly root: string;
  itemTypeParam: string;
  pageParam: string;
  numberOfItemsParam: string;
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

interface ExtendedURL extends BaseURL {
  (hopParam?: string, abvParam?: string): string;
}

export { URLElements, BaseURL as URL, ExtendedURL as ExtraParams };
