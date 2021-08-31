/* eslint-disable require-jsdoc */
import {apartamentTypes} from '../types';
import {ApartamentsType, RelationShipType} from '../types/apartamentTypes';


class Apartament {
  id: number;
  type: ApartamentsType;
  area: number;
  areaType: string;
  title: string;
  rooms: number;
  like: boolean;
  adress: { city: string; street: string; house: string; room: number };
  relationships: RelationShipType;


  constructor(apartament: apartamentTypes.IApartament) {
    this.id = apartament.id;
    this.type = apartament.type;
    this.title = apartament.title;
    this.rooms = apartament.rooms,
    this.adress = apartament.adress;
    this.relationships = apartament.relationships;
    this.area = apartament.area;
    this.areaType = apartament.areaType;
    this.like = false;
  }

  static getApartamentsByApi(data: any) {
    return new Apartament({
      id: data.id,
      type: data.type,
      title: data.attributes.title,
      rooms: data.attributes.rooms,
      adress: data.attributes.address,
      relationships: data.relationships,
      area: data.attributes.area,
      areaType: data.attributes.unit,

    } as apartamentTypes.IApartament);
  }

  get Address() {
    return `${this.adress.city}, ${this.adress.street} ${this.adress.house}`;
  }
  get Type() {
    return 'Квартира';
  }
  get Area() {
    return `${this.area} ${this.areaType}`;
  }
}


export default Apartament;


