import { useState } from 'react';
import { type InvestmentFilter, type InsvestmentResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import { type FilterPage, type RequestPagination } from '@/shared/domain';
import { createColumnHelper } from '@tanstack/react-table';
import TablePaginated from '@/core/components/table/TablePaginated';
import usePaginatedSearchInvestment from '../../application/hooks/usePaginatedSearchInvestment';



const index = (): JSX.Element => {
  const [investmentFilter, setInvestmentFilter] = useState<RequestPagination<InvestmentFilter>>({
    page: 1,
    perPage: 10,
  });

  // React Query
  const { data: investmentPaginated, isFetching } =
    usePaginatedSearchInvestment(investmentFilter);

  // React Table
  const columnHelper = createColumnHelper<InsvestmentResponse>();

  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('amountInvested', {
      header: 'Monto Invertido',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('description', {
      header: 'Descripcion',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('miningConcession', {
      header: 'Concesion Minera',
      cell: ({ row }) => row.original.miningConcession?.name ?? '',
    }),
    columnHelper.accessor('investmentconcept', {
      header: 'Concepto de Inversion',
      cell: ({ row }) => row.original.investmentconcept?.name ?? ''
    }),
    columnHelper.accessor('currencyTypeId', {
      header: 'Tipo de Moneda',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('periodType', {
      header: 'Tipo de Periodo',
      cell: ({ row }) => row.original.periodType?.name ?? '',
    }),
    columnHelper.accessor('measureUnit', {
      header: 'Unidad de Medida',
      cell: ({ row }) => row.original.measureUnit?.name ?? '',
    }),
    columnHelper.accessor('holder', {
      header: 'Titular',
      cell: ({ row }) => row.original.holder?.name ?? '',
    }),
    columnHelper.accessor('declaredTypeId', {
      header: 'Tipo de Declaracion',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('investmenttype', {
      header: 'Tipo de Inversion',
      cell: ({ row }) => row.original.investmenttype?.name ?? '',
    }),
    columnHelper.accessor('registrationDate', {
      header: 'Fech. Registro',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('state', {
      header: 'Estado',
      cell: ({ row }) => (
        <div className="text-center">
          <Badge pill bg={row.original.state ? 'success' : 'danger'}>
            {row.original.state ? 'Activo' : 'Eliminado'}
          </Badge>
        </div>
      ),
    }),

  ];

  // Methods
  const goToPage = (payload: FilterPage): void => {
    setInvestmentFilter(prev => {
      return {
        ...prev,
        page: payload.page,
        perPage: payload.perPage,
      };
    });
  };

  return (
    <>
      <Row className="pt-2">
        <Col xs={12}>
          <Card>
            <Card.Header>Listado de Investment</Card.Header>
            <Card.Body>
              <TablePaginated<InsvestmentResponse>
                columns={columns}
                data={investmentPaginated}
                goToPage={goToPage}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default index;
