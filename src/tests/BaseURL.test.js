import { getProperURL } from "../components/URLConfig/BaseURL";

test("check if string is genereted", () => {
  const exampleRoot = `https://example.url.com/v1/`;
  const exampleItemType = `items`;
  const examplePage = `?page=`;
  const exampleOptionValue = `2`;
  const exampleItemNumber = `&per_page=20`;

  const expectedURL = `${exampleRoot}${exampleItemType}${examplePage}${exampleOptionValue}${exampleItemNumber}`;
  const fnToCheck = getProperURL;

  expect(
    fnToCheck(
      exampleRoot,
      exampleItemType,
      examplePage,
      exampleOptionValue,
      exampleItemNumber
    )
  ).toBe(expectedURL);
});
