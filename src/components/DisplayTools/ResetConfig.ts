import {
  selectInput,
  filterInput,
  searchHopInput,
  searchABVInput,
  imgContainer,
  infoContainer,
} from "../DOM/DOMElements";

export const getResetConfiguration = () => {
  selectInput.value = ``;
  filterInput.value = ``;
  searchHopInput.value = ``;
  searchABVInput.value = ``;
  imgContainer.innerHTML = ``;
  infoContainer.innerHTML = ``;
};
