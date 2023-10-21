import { type RequestPagination, type ResponsePagination } from "@/shared/domain";
import { type InvestmentFilter } from "../domain";
import type InvesmentResponse from "../domain/InsvestmentResponse";
import axios, { type AxiosResponse } from "axios";
import { stringify } from 'qs';

type InvesmentResponsePagination=ResponsePagination<InvesmentResponse>;

export const paginatedSearch = async(payload:RequestPagination<InvestmentFilter>)
:Promise<InvesmentResponsePagination> => {

  const queryParams: string = stringify(payload, { allowDots: true });

  const response:AxiosResponse<InvesmentResponsePagination> = await axios.get<InvesmentResponsePagination>(`/investment/paginatedsearch?${queryParams}`); 
  
  return response.data;
}