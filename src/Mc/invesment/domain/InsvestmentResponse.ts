export default interface InvestmentResponse {
  id:                number;
  amountInvested:    number;
  description:       string;
  miningConcession:  InfoDetail;
  investmentconcept: InfoDetail;
  currencyTypeId:    number;
  periodType:        InfoDetail;
  measureUnit:       InfoDetail;
  registrationDate:  Date;
  state:             boolean;
  holder:            InfoDetail;
  declaredTypeId:    number;
  investmenttype:    InfoDetail;
}

interface InfoDetail {
  id:   number;
  name: string;
}
