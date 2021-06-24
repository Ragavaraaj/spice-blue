export interface AddNewTaskResponse {
  status: string;
  code: number;
  message: string;
  results: AddNewTaskResponse_Results;
}

export interface AddNewTaskResponse_Results {
  assigned_user: string;
  is_completed: number;
  task_date: string;
  task_msg: string;
  task_time: number;
  time_zone: number;
  inbox_type: string;
  task_date_time_in_utc: TaskDateTimeInUTC;
  task_date_time_in_utc_string: string;
  task_date_time_offset: number;
  type_3: string;
  lead_id: string;
  modified_by: string;
  modified: TaskDateTimeInUTC;
  status: number;
  is_delete: number;
  is_archived: number;
  is_shared: number;
  created: TaskDateTimeInUTC;
  company_id: string;
  user_id: string;
  id: string;
  user_name: string;
  user_icon: string;
}

interface TaskDateTimeInUTC {
  $date: number;
}

export interface AddNewTaskPayLoadType {
  assigned_user?: string;
  task_date?: string;
  task_time?: number;
  is_completed?: number;
  time_zone?: number;
  task_mg?: string;
}
