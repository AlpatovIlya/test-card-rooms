interface IApartament {
  id: number;
  type: ApartamentsType;
  area: number;
  areaType: string;
  title: string;
  rooms: number;
  adress: Adress;
  relationships: RelationShipType;
}

type RelationShipType = {
  id: number;
  type: string;
  attributes: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
};

type Adress = {
  city: string;
  street: string;
  house: string;
  room: number;
};

type ApartamentsType = 'flat';

type Filter = {
  type?: string;
  rooms: number;
};


export {IApartament, Filter, ApartamentsType, RelationShipType};
