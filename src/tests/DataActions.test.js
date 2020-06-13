import { dataActions } from "../components/DataTools/DataActions";

const { getElementsByProperty } = dataActions;

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
