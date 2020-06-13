export interface Pagination {
  itemsPerPage: number;
  currentPage: number;
  startPage: number;
  getFirstItem: (numberOfDisplayedItems: number, page: number) => number;
  getLastItem: (firstItem: number, numberOfDisplayedItems: number) => number;
  getPages: (itemsLength: number, itemsPerPage: number) => number;
}
