export class PaginatedResponse<T> {
  returnedCount: number;
  totalResultsCount: number;
  results: T[];
}
