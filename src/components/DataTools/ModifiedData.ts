import { DataStructure, DisplayedData } from "../../interfaces/DataStructure";
import { dataActions } from "./DataActions";
import { getDisplayedImages } from "../DisplayTools/DisplayImages";
import { DataProviders } from "../../enums/DataProviders";

const { getElementsByProperty, getUniqueElements } = dataActions;

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
        hops: getUniqueElements(
          getElementsByProperty(d.ingredients.hops, DataProviders.NAME)
        ),
        foodPairing: d.food_pairing,
      }
  );

  getDisplayedImages(dataToDisplay);
};
