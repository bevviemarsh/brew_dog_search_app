import { dataActions } from "../components/DataTools/DataActions";

const {
  getElementsByProperty,
  getUniqueElements,
  getReplacedWhiteSpaces,
} = dataActions;

test("get array of elements using specific property", () => {
  const exampleArray = [
    { name: "Amarillo", destination: "bitter" },
    { name: "Simcoe", destination: "bitter/aroma" },
  ];
  const exampleProperty = "name";
  const expectedArray = ["Amarillo", "Simcoe"];
  const exampleElement = "Amarillo";

  expect(getElementsByProperty(exampleArray, exampleProperty)).toStrictEqual(
    expectedArray
  );

  expect(getElementsByProperty(exampleArray, exampleProperty)).toContain(
    exampleElement
  );
});

test("invalid array or name of property", () => {
  const exampleEmptyArray = [];
  const exampleProperty = "name";
  const expectedEmptyArray = [];

  expect(
    getElementsByProperty(exampleEmptyArray, exampleProperty)
  ).toStrictEqual(expectedEmptyArray);
});

test("get only unique elements from the array", () => {
  const exampleArrayOfStrings = [
    "Amarillo",
    "Citra",
    "Citra",
    "Simcoe",
    "Amarillo",
  ];
  const expectedArrayWithUniqueElements = ["Amarillo", "Citra", "Simcoe"];
  const exampleString = "Amarillo";

  expect(getUniqueElements(exampleArrayOfStrings)).toStrictEqual(
    expectedArrayWithUniqueElements
  );

  expect(getUniqueElements(exampleArrayOfStrings)).toContain(exampleString);
});

test("get unique elements from empty array", () => {
  const exampleEmptyArray = [];
  const expectedEmptyArray = [];

  expect(getUniqueElements(exampleEmptyArray)).toStrictEqual(
    expectedEmptyArray
  );
});

test("transform white spaces into underscores", () => {
  const exampleString = "white spaces are here";
  const expectedString = "white_spaces_are_here";
  const exampleStringNoSpaces = "noSpaces";
  const expectedStringNoSpaces = "noSpaces";
  const exampleEmptyString = "";
  const expectedEmptyString = "";

  expect(getReplacedWhiteSpaces(exampleString)).toStrictEqual(expectedString);
  expect(getReplacedWhiteSpaces(exampleStringNoSpaces)).toStrictEqual(
    expectedStringNoSpaces
  );
  expect(getReplacedWhiteSpaces(exampleEmptyString)).toStrictEqual(
    expectedEmptyString
  );
});
