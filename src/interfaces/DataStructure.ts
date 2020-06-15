export interface DataStructure {
  id: number;
  name: string;
  image_url?: string;
  description: string;
  abv: number;
  ibu: number;
  first_brewed: string;
  ingredients: { hops: [] };
  food_pairing: string[];
}

export interface DisplayedData {
  id: number;
  name: string;
  image?: string;
  description: string;
  abv: number;
  ibu: number;
  firstBrewed: string;
  hops: string[];
  foodPairing: string[];
}

export interface DataModifiers {
  getElementsByProperty: (array: [], property: string) => string[];
  getUniqueElements: (array: string[]) => string[];
}
