export class AddressDTO {
  typeLocal: string;
  number: string;
  city: string;
  state: string;

  constructor({
    typeLocal,
    number,
    city,
    state,
  }: {
    typeLocal: string;
    number: string;
    city: string;
    state: string;
  }) {
    this.typeLocal = typeLocal;
    this.number = number;
    this.city = city;
    this.state = state;
  }
}
