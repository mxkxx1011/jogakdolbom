export interface ErrorType {
  errorCode: string;
  reason: string;
  data: object;
}

export interface SuccessResponse<T = unknown> {
  resultType: 'SUCCESS';
  error: null;
  success: T;
}

export interface ErrorResponse {
  resultType: 'FAIL';
  error: ErrorType;
  success: null;
}

export type ResponseType<T> = SuccessResponse<T> | ErrorResponse;

export interface Pagination {
  page: number;
  totalPages: number;
}

interface SuccessDataResponse<T = unknown> {
  resultType: 'SUCCESS';
  error: null;
  data: T;
}

interface ErrorDataResponse {
  resultType: 'FAIL';
  error: ErrorType;
  data: null;
}

export type ResponseDataType<T> = SuccessDataResponse<T> | ErrorDataResponse;
