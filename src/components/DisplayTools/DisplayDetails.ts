import { DisplayedData } from "../../interfaces/DataStructure";
import { factory } from "../DOM/DOMElements";
import { ButtonElements } from "../../enums/ButtonProviders";
import { DOMProviders } from "../../enums/DOMElementsProviders";

export const getDisplayedDetails = (list: NodeList, items: DisplayedData[]) => {
  const figureElements: NodeList = list;
  const displayedItems: DisplayedData[] = items;

  figureElements.forEach((element, i) =>
    element.addEventListener(ButtonElements.CLICK, () => {
      const info: string = displayedItems
        .map((d, idx) =>
          i === idx
            ? `
      <div class="sectionTxt__container--details">
        <p><span>ABV:</span> ${d.abv}%</p>
        <p><span>Bitterness:</span> ${d.ibu} IBU</p>
        <p><span>Description:</span> ${d.description}</p>
        <p><span>First brewed:</span> ${d.firstBrewed}</p>
        <p><span>Hops and Extras:</span> ${d.hops.join(", ")}</p>
        <p><span>Food pairing:</span> ${d.foodPairing.join(", ")}</p>
      </div>
        `
            : ``
        )
        .join(" ");

      factory.createDOMElements(
        DOMProviders.INFO_CONTAINER
      )!.infoContainer.innerHTML = `${info}`;
    })
  );
};
