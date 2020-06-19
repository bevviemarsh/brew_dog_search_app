import { DataModifiers } from "../../interfaces/DataStructure";

export const dataActions: DataModifiers = {
  getElementsByProperty: (array: [], propertyName: string): string[] =>
    array.length && propertyName.length
      ? array.map((item) => item[propertyName])
      : [],

  getUniqueElements: (array: string[]): string[] =>
    array.length
      ? array.filter((item, index) => array.indexOf(item) === index)
      : [],

  getReplacedWhiteSpaces: (item: string) => item.replace(/ /g, "_"),
};
