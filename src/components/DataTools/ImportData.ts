import { URLBuilders } from "../URLConfig/URLParams";
import { getProperURL, getExtendedURL } from "../URLConfig/BaseURL";
import { getModifiedData } from "./ModifiedData";
import {
  selectInput,
  filterInput,
  searchHopInput,
  searchABVInput,
  searchButton,
  clearButton,
  infoContainer,
  imgContainer,
} from "../DOM/DOMElements";
import { ButtonAndHandlerElements } from "../../enums/ButtonProviders";
import { ErrorHandler } from "../../enums/ErrorHandler";
import { DataProviders } from "../../enums/DataProviders";
import { paginationElements } from "../DisplayTools/PaginationCofing";
import { getResetConfiguration } from "../DisplayTools/ResetConfig";
import { dataActions } from "./DataActions";

const {
  root,
  itemTypeParam,
  pageParam,
  numberOfItemsParam,
  hopParam,
  abvParam,
} = URLBuilders;
const { getReplacedWhiteSpaces } = dataActions;

const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    getModifiedData(data);
  } catch (err) {
    console.log(`${ErrorHandler.ERROR}${err}`);
  }
};

selectInput.addEventListener(ButtonAndHandlerElements.CHANGE, (e: any) => {
  if (!searchHopInput.value && !searchABVInput.value) {
    getData(
      getProperURL(
        root,
        itemTypeParam,
        pageParam,
        (e.target as HTMLOptionElement).value,
        numberOfItemsParam
      )
    );
    paginationElements.currentPage = DataProviders.RESET_PAGE;
    filterInput.value = ``;
    infoContainer.innerHTML = ``;
  } else {
    const hopName: string = searchHopInput.value.toLowerCase();
    const abvValue: string = searchABVInput.value.toLowerCase();
    getData(
      getExtendedURL(
        root,
        itemTypeParam,
        pageParam,
        (e.target as HTMLOptionElement).value,
        numberOfItemsParam,
        hopParam!,
        hopName,
        abvParam!,
        abvValue
      )
    );
    paginationElements.currentPage = DataProviders.RESET_PAGE;
    filterInput.value = ``;
    infoContainer.innerHTML = ``;
  }

  if (!selectInput.value) {
    imgContainer.innerHTML = `Please, choose dataset`;
  }
});

searchButton.addEventListener(ButtonAndHandlerElements.CLICK, (e: any) => {
  e.preventDefault();
  searchButton.classList.add(ButtonAndHandlerElements.ACTIVE);
  if (searchHopInput.value || searchABVInput.value) {
    const hopName: string = searchHopInput.value.toLowerCase();
    const abvValue: string = searchABVInput.value.toLowerCase();

    getData(
      getExtendedURL(
        root,
        itemTypeParam,
        pageParam,
        DataProviders.FIRST_DATASET,
        numberOfItemsParam,
        hopParam!,
        getReplacedWhiteSpaces(hopName),
        abvParam!,
        abvValue
      )
    );

    selectInput.value = DataProviders.FIRST_DATASET;
    filterInput.value = DataProviders.CLEARED_DATA;
    infoContainer.innerHTML = DataProviders.CLEARED_DATA;
  }
  setTimeout(
    () => searchButton.classList.remove(ButtonAndHandlerElements.ACTIVE),
    ButtonAndHandlerElements.DELAY_TIME
  );
});

clearButton.addEventListener(ButtonAndHandlerElements.CLICK, (e: any) => {
  e.preventDefault();

  clearButton.classList.add(ButtonAndHandlerElements.ACTIVE);

  getResetConfiguration();

  setTimeout(
    () => clearButton.classList.remove(ButtonAndHandlerElements.ACTIVE),
    ButtonAndHandlerElements.DELAY_TIME
  );
});
