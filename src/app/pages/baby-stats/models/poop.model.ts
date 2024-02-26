export interface IPoop {
  date: Date,
  weight: number,
  note: string;
}

export class Poop implements IPoop {
  date: Date;
  weight: number;
  note: string;

  constructor(p) {
    if (p) {
      Object.assign(this, p);
    }
  }
}