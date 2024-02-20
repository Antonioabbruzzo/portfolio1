export interface IModel {
  name: string;
  description: string;
  id: number;
  vote: number;
  cfu: number;
  showEdit: boolean;
}

export class Model implements IModel {
  name: string = '';
  description: string = '';
  vote: number = 0;
  cfu: number = 0;
  id: number = 0;

  showEdit: boolean = false;
  constructor(p: IModel) {
    this.name = p.name;
    this.description = p.description;
    this.id = p.id;
    this.cfu = p.cfu;
    this.vote = p.vote;
  }

}