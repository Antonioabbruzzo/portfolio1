export interface INanna {
  date: Date;
  duration: number;
  note: string;
}

export class Nanna implements INanna {
  date: Date;
  duration: number;
  note: string;

  constructor(n) {
    if (n) {
      Object.assign(this, n);
    }
  }
}