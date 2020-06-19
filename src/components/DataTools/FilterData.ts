import { DisplayedData } from "../../interfaces/DataStructure";
import { filterInput } from "../DOM/DOMElements";
import { getDisplayedImages } from "../DisplayTools/DisplayImages";
import { ButtonAndHandlerElements } from "../../enums/ButtonProviders";
import { paginationElements } from "../DisplayTools/PaginationCofing";
import { DataProviders } from "../../enums/DataProviders";

export const getFilteredData = (data: DisplayedData[]) => {
  filterInput.addEventListener(ButtonAndHandlerElements.INPUT, (e: any) => {
    const text: string = e.target.value.toLowerCase();
    const items: DisplayedData[] = data;

    paginationElements.currentPage = DataProviders.RESET_PAGE;

    getDisplayedImages(
      items.filter((item) => item.name.toLowerCase().includes(text))
    );
  });
};
