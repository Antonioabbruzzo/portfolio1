import { Meal } from "./meal.model";
import { IPee } from "./pip.model";
import { IPoop } from "./poop.model";

export interface Weight {
  date: Date,
  weight: number,
  note: string;
}


export interface IBaby {
  name: string;
  sex: 'm' | 'f';
  born: Date;
  weigths: Weight[];
  meals: Meal[];
  pees: IPee[];
  poops: IPoop[];
}

export { Meal };
