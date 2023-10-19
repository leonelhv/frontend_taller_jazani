import axios, { type AxiosResponse } from 'axios';
import { type PeriocityResponse } from '../domain';

export const findAll = async (): Promise<PeriocityResponse[]> => {
  const response:AxiosResponse<PeriocityResponse[]> = await axios.get<PeriocityResponse[]>('/periocity');
	return response.data;
};
