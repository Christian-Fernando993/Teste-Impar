import axios from "axios";

export const api = 'https://pokeapi.co/api/v2/';

export const axiosCon = axios.create({
  baseURL: api,
});

export default axiosCon;
