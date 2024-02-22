export interface Weight {
  date: Date,
  weight: number,
  note: string;
}
export interface Meal {
  date: Date,
  weight: number,
  note: string;
}
export interface Pee {
  date: Date,
  weight: number,
  note: string;
}
export interface Poop {
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
  pees: Pee[];
  poops: Poop[];
}