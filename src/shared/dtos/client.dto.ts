import { AddressDTO } from 'src/shared/dtos/address.dto';

export class ClientDTO {
  name: string;
  age: string;
  email: string;
  phones: string[];
  cep: string;
  address: AddressDTO;

  constructor({
    name,
    age,
    email,
    phones,
    cep,
    address,
  }: {
    name: string;
    age: string;
    email: string;
    phones: string[];
    cep: string;
    address: AddressDTO;
  }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phones = phones;
    this.cep = cep;
    this.address = address;
  }
}
