import { paginationElements } from "../components/DisplayTools/PaginationCofing";

const { getFirstItem, getLastItem, getPages } = paginationElements;

test("calculated first item position", () => {
  const exampleNumberOfItems = 20;
  const examplePage = 1;
  const expectedPosition = 20;

  expect(getFirstItem(exampleNumberOfItems, examplePage)).toBe(
    expectedPosition
  );
});

test("calculated last item position", () => {
  const exampleFirstItemPosition = 20;
  const exampleNumberOfItems = 30;
  const expectedLastItemPosition = 50;

  expect(getLastItem(exampleFirstItemPosition, exampleNumberOfItems)).toBe(
    expectedLastItemPosition
  );
});

test("get number of pages", () => {
  const exampleItemsLength = 30;
  const exampleNumberOfItemsPerPage = 10;
  const expectedNumberOfPages = 3;

  expect(getPages(exampleItemsLength, exampleNumberOfItemsPerPage)).toBe(
    expectedNumberOfPages
  );
});
