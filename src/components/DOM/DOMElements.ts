import { DOMProviders } from "../../enums/DOMElementsProviders";

class DOMFactory {
  createDOMElements: CallableFunction;

  constructor() {
    this.createDOMElements = (name: string) => {
      if (name === DOMProviders.SELECT) {
        return new Select(name);
      } else if (name === DOMProviders.FILTER_DATA) {
        return new Filter(name);
      } else if (name === DOMProviders.IMG_CONTAINER) {
        return new ImageContainer(name);
      } else if (name === DOMProviders.INFO_CONTAINER) {
        return new InfoContainer(name);
      } else if (name === DOMProviders.PAGINATION_CONTAINER) {
        return new PaginationContainer(name);
      } else if (name === DOMProviders.FIGURE_LIST) {
        return new FigureList(name);
      } else if (name === DOMProviders.SEARCH_BY_HOP) {
        return new HopInput(name);
      } else if (name === DOMProviders.SEARCH_BY_ABV) {
        return new ABVInput(name);
      } else if (name === DOMProviders.BUTTON_SEARCH) {
        return new ButtonSearch(name);
      } else if (name === DOMProviders.BUTTON_CLEAR) {
        return new ButtonClear(name);
      }
    };
  }
}

class Select {
  selectDataset: HTMLSelectElement;
  constructor(public name: string) {
    this.selectDataset = document.getElementById(
      this.name
    )! as HTMLSelectElement;
  }
}

class Filter {
  filterDataset: HTMLInputElement;
  constructor(public name: string) {
    this.filterDataset = document.getElementById(
      this.name
    )! as HTMLInputElement;
  }
}

class ImageContainer {
  imgContainer: HTMLDivElement;
  constructor(protected name: string) {
    this.imgContainer = document.getElementById(this.name)! as HTMLDivElement;
  }
}

class InfoContainer {
  infoContainer: HTMLDivElement;
  constructor(protected name: string) {
    this.infoContainer = document.getElementById(this.name)! as HTMLDivElement;
  }
}

class PaginationContainer {
  paginationContainer: HTMLDivElement;
  constructor(protected name: string) {
    this.paginationContainer = document.getElementById(
      this.name
    )! as HTMLDivElement;
  }
}

class FigureList {
  figureList: NodeList;
  constructor(protected name: string) {
    this.figureList = document.querySelectorAll(this.name)! as NodeList;
  }
}

class HopInput {
  searchByHopName: HTMLInputElement;
  constructor(public name: string) {
    this.searchByHopName = document.getElementById(
      this.name
    )! as HTMLInputElement;
  }
}

class ABVInput {
  searchByABV: HTMLInputElement;
  constructor(public name: string) {
    this.searchByABV = document.getElementById(this.name)! as HTMLInputElement;
  }
}

class ButtonSearch {
  searchButton: HTMLButtonElement;
  constructor(protected name: string) {
    this.searchButton = document.getElementById(
      this.name
    )! as HTMLButtonElement;
  }
}

class ButtonClear {
  clearButton: HTMLButtonElement;
  constructor(protected name: string) {
    this.clearButton = document.getElementById(this.name)! as HTMLButtonElement;
  }
}

export const factory = new DOMFactory();

export const selectInput: HTMLSelectElement = factory.createDOMElements(
  DOMProviders.SELECT
)!.selectDataset;
export const filterInput: HTMLInputElement = factory.createDOMElements(
  DOMProviders.FILTER_DATA
)!.filterDataset;
export const imgContainer: HTMLDivElement = factory.createDOMElements(
  DOMProviders.IMG_CONTAINER
)!.imgContainer;
export const infoContainer: HTMLDivElement = factory.createDOMElements(
  DOMProviders.INFO_CONTAINER
)!.infoContainer;
export const searchHopInput: HTMLInputElement = factory.createDOMElements(
  DOMProviders.SEARCH_BY_HOP
)!.searchByHopName;
export const searchABVInput: HTMLInputElement = factory.createDOMElements(
  DOMProviders.SEARCH_BY_ABV
)!.searchByABV;
export const searchButton: HTMLButtonElement = factory.createDOMElements(
  DOMProviders.BUTTON_SEARCH
)!.searchButton;
export const clearButton: HTMLButtonElement = factory.createDOMElements(
  DOMProviders.BUTTON_CLEAR
)!.clearButton;
