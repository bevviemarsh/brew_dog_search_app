import { URLBuilders } from "../URLConfig/URLParams";
import { getProperURL } from "../URLConfig/BaseURL";
import { getModifiedData } from "../DataTools/ModifiedData";
import { factory } from "../DOM/DOMElements";
import { DOMProviders } from "../../enums/DOMElementsProviders";

const { root, itemTypeParam, pageParam, numberOfItemsParam } = URLBuilders;

const getData = async (optionValue: string) => {
  try {
    const response = await fetch(
      getProperURL(
        root,
        itemTypeParam,
        pageParam,
        optionValue,
        numberOfItemsParam
      )
    );
    const data = await response.json();
    return getModifiedData(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

factory
  .createDOMElements(DOMProviders.SELECT)!
  .selectDataset.addEventListener("change", (e: any) =>
    getData((e.target as HTMLOptionElement).value)
  );
