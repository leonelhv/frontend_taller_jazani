import axios, { type AxiosResponse } from 'axios';
import { type PeriocityResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<PeriocityResponse[]>> => {
	return await axios.get<PeriocityResponse[]>('https://localhost:7032/api/periocity');
};
