export interface FetchUserIdResponse {
  status: string;
  code: number;
  message: string;
  results: FetchUserIdResponse_Results;
}

export interface FetchUserIdResponse_Results {
  by_default: string;
  country: string;
  role: number;
  last: string;
  company_id: string;
  created: string;
  is_first: number;
  icon: string;
  is_creator: number;
  is_delete: number;
  is_archived: number;
  phone: string;
  user_id: string;
  is_shared: number;
  name: string;
  modified_by: string;
  modified: string;
  id: string;
  first: string;
  email: string;
  status: number;
  company: string;
  currency: string;
}
