export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface ApiData<T> {
  totalPages: number;
  totalElements: number;
  currentSize: number;
  first: boolean;
  last: boolean;
  contents: T;
}
