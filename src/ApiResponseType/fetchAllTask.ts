export interface FetchAllTaskResponse {
  status: string;
  code: number;
  message: string;
  results: FetchAllTaskResponse_Result[];
}

export interface FetchAllTaskResponse_Result {
  assigned_user: string;
  task_date: string;
  task_msg: string;
  task_time: number;
  time_zone: number;
  is_completed: number;
  inbox_type: string;
  task_date_time_in_utc: string;
  task_date_time_in_utc_string: string;
  task_date_time_offset: number;
  type_3: string;
  lead_id: string;
  modified_by: string;
  modified: string;
  status: number;
  is_delete: number;
  is_archived: number;
  is_shared: number;
  created: string;
  company_id: string;
  user_id: string;
  id: string;
}
