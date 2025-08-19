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
