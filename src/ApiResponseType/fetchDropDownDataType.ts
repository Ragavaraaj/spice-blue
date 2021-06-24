export interface FetchDropDownDataResponse {
  status: string;
  code: number;
  message: string;
  results: Results;
}

interface Results {
  users_accepted: number;
  data: FetchDropDownDataType_Results_Data[];
}

export interface FetchDropDownDataType_Results_Data {
  by_default?: string;
  country?: string;
  role: number;
  last: string;
  company_id: string;
  created: string;
  is_first?: number;
  icon: string;
  is_creator?: number;
  is_delete: number;
  is_archived: number;
  phone?: string;
  user_id: string;
  is_shared: number;
  name: string;
  modified_by: string;
  modified: string;
  id: string;
  first: string;
  email: string;
  status: number;
  user_status: string;
  is_accepted?: number;
  created_by?: string;
}
