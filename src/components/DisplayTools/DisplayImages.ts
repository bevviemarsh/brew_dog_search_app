import { DisplayedData } from "../../interfaces/DataStructure";
import { factory } from "../DOM/DOMElements";
import { DOMProviders } from "../../enums/DOMElementsProviders";
import { ButtonElements } from "../../enums/ButtonProviders";
import { ErrorHandler } from "../../enums/ErrorHandler";
import { DataProviders } from "../../enums/DataProviders";
import { paginationElements } from "./PaginationCofing";
import { getDisplayedDetails } from "./DisplayDetails";

const {
  itemsPerPage,
  getFirstItem,
  getLastItem,
  getPages,
} = paginationElements;

export const getDisplayedImages = (data: DisplayedData[]): void => {
  const items: DisplayedData[] = data;

  const itemsContainer: HTMLDivElement = factory.createDOMElements(
    DOMProviders.IMG_CONTAINER
  )!.imgContainer;

  paginationElements.currentPage--;
  let firstItem: number = getFirstItem(
    itemsPerPage,
    paginationElements.currentPage
  );
  let lastItem: number = getLastItem(firstItem, itemsPerPage);
  const paginatedItems: DisplayedData[] = items.slice(firstItem, lastItem);

  const images: string = paginatedItems
    .map(
      (d) =>
        `<figure id="imgElement" class="sectionImg__container--img">
          ${
            d.image
              ? `<img src=${d.image} loading="lazy" width="30" height="100">`
              : `<p>${ErrorHandler.NO_IMAGE}</p>`
          }
          <figcaption>${d.name}</figcaption>
        </figure>`
    )
    .join(" ");

  itemsContainer.innerHTML = `
    ${images}
    <div id="paginationContainer" class="sectionImg__container--pagination"></div>
  `;

  const paginationContainer: HTMLDivElement = factory.createDOMElements(
    DOMProviders.PAGINATION_CONTAINER
  )!.paginationContainer;

  paginationElements.currentPage++;

  getDisplayedDetails(
    factory.createDOMElements(DOMProviders.FIGURE_LIST)!.figureList,
    paginatedItems
  );
  getPagination(items, paginationContainer, itemsPerPage);
};

const getPagination = (
  items: DisplayedData[],
  container: HTMLDivElement,
  itemsPerPage: number
): void => {
  container.innerHTML = "";
  let numberOfPage: number = getPages(items.length, itemsPerPage);

  paginationElements.startPage = DataProviders.RESET_PAGE;
  do {
    const btn = getCreatedButtons(paginationElements.startPage, items);
    container.appendChild(btn);
    paginationElements.startPage++;
  } while (paginationElements.startPage <= numberOfPage);
};

const getCreatedButtons = (
  page: number,
  items: DisplayedData[]
): HTMLButtonElement => {
  const button = document.createElement(
    ButtonElements.BUTTON
  ) as HTMLButtonElement;
  button.innerText = page.toString();

  if (paginationElements.currentPage === page) {
    button.classList.add(ButtonElements.ACTIVE);
  }

  button.addEventListener(ButtonElements.CLICK, () => {
    paginationElements.currentPage = page;
    getDisplayedImages(items);
  });

  return button;
};
