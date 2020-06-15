import { DOMProviders } from "../../enums/DOMElementsProviders";

class DOMFactory {
  createDOMElements: CallableFunction;

  constructor() {
    this.createDOMElements = (name: string) => {
      if (name === DOMProviders.SELECT) {
        return new Select(name);
      } else if (name === DOMProviders.IMG_CONTAINER) {
        return new ImageContainer(name);
      } else if (name === DOMProviders.INFO_CONTAINER) {
        return new InfoContainer(name);
      } else if (name === DOMProviders.PAGINATION_CONTAINER) {
        return new PaginationContainer(name);
      } else if (name === DOMProviders.FIGURE_LIST) {
        return new FigureList(name);
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

export const factory = new DOMFactory();
