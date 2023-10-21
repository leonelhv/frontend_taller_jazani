import { type ResponsePagination, type RequestPagination } from '@/shared/domain';
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';

import { PAGINATED_SEARCH } from './QueryKeys';
import { type InvestmentFilter } from '../../domain';
import type InvesmentResponse from '../../domain/InsvestmentResponse';
import { InvestmentRespository } from '../../infrastructure';


const usePaginatedSearchInvestment = (
	searchFilter: RequestPagination<InvestmentFilter>,
): DefinedUseQueryResult<ResponsePagination<InvesmentResponse>, Error> => {
	return useQuery({
		queryKey: [PAGINATED_SEARCH, searchFilter],
		queryFn: async () => await InvestmentRespository.paginatedSearch(searchFilter),
		retry: 0,
		refetchOnWindowFocus: false,
		initialData: {
			from: 0,
			to: 0,
			perPage: 0,
			currentPage: 0,
			lastPage: 0,
			total: 0,
			data: [],
		},
	});
};

export default usePaginatedSearchInvestment;
