export interface IPotion {
  "id": "string",
  "name": "string",
  "effect": "string",
  "sideEffects": "string",
  "characteristics": "string",
  "time": "string",
  "difficulty": "Unknown",
  "ingredients": [
    {
      "id": "string",
      "name": "string";
    }
  ],
  "inventors": [
    {
      "id": "string",
      "firstName": "string",
      "lastName": "string";
    }
  ],
  "manufacturer": "string";
}

export class Potion implements IPotion {
  "id": "string";
  "name": "string";
  "effect": "string";
  "sideEffects": "string";
  "characteristics": "string";
  "time": "string";
  "difficulty": "Unknown";
  "ingredients": [{ id: "string"; name: "string"; }];
  "inventors": [{ id: "string"; firstName: "string"; lastName: "string"; }];
  "manufacturer": "string";

}