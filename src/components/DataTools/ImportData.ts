import { URLBuilders } from "../URLConfig/URLParams";
import { getProperURL } from "../URLConfig/BaseURL";
import { getModifiedData } from "../DataTools/ModifiedData";

const { root, itemTypeParam, pageParam, numberOfItemsParam } = URLBuilders;

const selectBeerset = document.getElementById(
  "selectDataset"
)! as HTMLSelectElement;

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

selectBeerset.addEventListener("change", (e) =>
  getData((e.target as HTMLOptionElement).value)
);
