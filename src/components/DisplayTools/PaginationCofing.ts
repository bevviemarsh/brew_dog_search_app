import { Pagination } from "../../interfaces/Pagination";

export const paginationElements: Pagination = {
  itemsPerPage: 10,
  currentPage: 1,
  startPage: 1,
  getFirstItem: (numberOfDisplayedItems: number, page: number): number =>
    numberOfDisplayedItems * page,
  getLastItem: (firstItem: number, numberOfDisplayedItems: number): number =>
    firstItem + numberOfDisplayedItems,
  getPages: (itemsLength: number, itemsPerPage: number): number =>
    Math.ceil(itemsLength / itemsPerPage),
};
