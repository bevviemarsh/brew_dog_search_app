import {
  DataStructure,
  DisplayedData,
  HopName,
} from "../../interfaces/DataStructure";
import { getDisplayedImages } from "../DisplayTools/DisplayImages";

export const getModifiedData = (data: DataStructure[]): void => {
  const dataToDisplay = data.map(
    (d) =>
      <DisplayedData>{
        id: d.id,
        name: d.name,
        image: d.image_url,
        description: d.description,
        abv: d.abv,
        ibu: d.ibu,
        firstBrewed: d.first_brewed,
        hops: d.ingredients.hops.map((d: HopName) => d.name),
        foodPairing: d.food_pairing,
      }
  );

  getDisplayedImages(dataToDisplay);
};
