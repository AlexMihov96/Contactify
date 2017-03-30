export interface ITokenResult {
  token_type: string;
  access_token: string;
  //refresh_token: string;
  expires_in: string;
  // scope: string;
  // this value is calculated
  expires_on?: Date;
}
