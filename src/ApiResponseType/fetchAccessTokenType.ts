export interface FetchAccessTokenResponse {
  status: string;
  code: number;
  message: string;
  results: Results;
}

interface Results {
  token: string;
  is_first: number;
  icon: string;
  by_default: string;
}
