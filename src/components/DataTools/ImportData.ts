import { URLBuilders } from "../URLConfig/URLParams";
import { getProperURL } from "../URLConfig/BaseURL";
import { getModifiedData } from "../DataTools/ModifiedData";
import { factory } from "../DOM/DOMElements";
import { DOMProviders } from "../../enums/DOMElementsProviders";
import { ButtonElements } from "../../enums/ButtonProviders";
import { ErrorHandler } from "../../enums/ErrorHandler";
import { DataProviders } from "../../enums/DataProviders";
import { paginationElements } from "../DisplayTools/PaginationCofing";

const { root, itemTypeParam, pageParam, numberOfItemsParam } = URLBuilders;

const getData = async (optionValue: string) => {
  try {
    const response = await fetch(
      getProperURL(
        root,
        itemTypeParam,
        pageParam,
        optionValue,
        numberOfItemsParam
      )
    );
    const data = await response.json();
    getModifiedData(data);
  } catch (err) {
    console.log(`${ErrorHandler.ERROR}${err}`);
  }
};

factory
  .createDOMElements(DOMProviders.SELECT)!
  .selectDataset.addEventListener(ButtonElements.CHANGE, (e: any) => {
    getData((e.target as HTMLOptionElement).value);
    paginationElements.currentPage = DataProviders.RESET_PAGE;
  });
