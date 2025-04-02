export interface LoginDTO {
  cardNumber:string;
  mobileNumber:string;
}

export interface CardDTO {
  cardNumber: string;
}

export interface CreateCardDTO{
  mobileNumber: string;
}

export interface ResponseDTO{
  statusCode: string;
  statusMsg: string;
  token?: string;
}

export interface FetchCardDTO {
  cardNumber: string;
  mobileNumber: string;
  balance: number;
  cardType: string;
  totalLimit: number;
  availableAmount: number;
}
