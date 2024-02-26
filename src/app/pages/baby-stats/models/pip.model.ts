export interface IPee {
  date: Date,
  weight: number,
  note: string;
}

export class Pee implements IPee {
  date: Date;
  weight: number;
  note: string;
  constructor(p) {
    if (p) {
      Object.assign(this, p);
    }
  }
}