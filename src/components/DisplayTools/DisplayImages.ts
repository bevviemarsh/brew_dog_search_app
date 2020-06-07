import { DisplayedData } from "../../interfaces/DataStructure";

export const getDisplayedImages = (data: DisplayedData[]) => {
  console.log("data from display", data);

  const imgContainer = document.getElementById(
    "imgContainer"
  )! as HTMLDivElement;

  const images = data.map(
    (d, i) =>
      `<figure>
  <img src=${d.image} width="100" height="100">
  <figcaption>${d.name}</figcaption>
      </figure>`
  );

  imgContainer.innerHTML = `${images}`;
};
