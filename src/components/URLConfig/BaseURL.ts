import { URL, ExtraURL } from "../../interfaces/URL";

export let getProperURL: URL;
getProperURL = (
  root: string,
  itemTypeParam: string,
  page: string,
  optionValue: string,
  itemNumber: string
) => `${root}${itemTypeParam}${page}${optionValue}${itemNumber}`;

export let getExtendedURL: ExtraURL;
getExtendedURL = (
  root: string,
  itemTypeParam: string,
  page: string,
  optionValue: string,
  itemNumber: string,
  hopParam: string,
  hopName: string,
  abvParam: string,
  abvValue: string
) =>
  `${root}${itemTypeParam}${page}${optionValue}${itemNumber}${hopParam}${
    hopName ? hopName : "citra"
  }${abvParam}${abvValue ? abvValue : 100}`;
