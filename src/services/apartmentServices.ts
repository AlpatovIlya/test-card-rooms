import {Apartament} from '../models';
import {apartamentTypes} from '../types';
import DataBase from '../assets/database/entites.json';

const DELAY = 3000;

const findAll = async (filter: apartamentTypes.Filter)
: Promise<Apartament[]> => {
  const res = DataBase.response;
  const apartaments = res.map((data) => Apartament.getApartamentsByApi(data));
  return new Promise((res) => {
    setTimeout(() => res(apartaments), DELAY);
  });
};


const apartamentServices = {findAll};

export default apartamentServices;


