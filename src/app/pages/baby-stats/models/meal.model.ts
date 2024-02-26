export interface IMeal {
  date: Date,
  weight: number,
  note: string;
}

export class Meal implements IMeal {
  date: Date;
  weight: number;
  note: string;

  constructor(m) {
    if (m) {
      Object.assign(this, m);
    }
  }

}