import { DataModifiers } from "../../interfaces/DataStructure";

export const dataActions: DataModifiers = {
  getElementsByProperty: (array: [], propertyName: string): string[] =>
    array.length && propertyName.length
      ? array.map((item) => item[propertyName])
      : [],
};
