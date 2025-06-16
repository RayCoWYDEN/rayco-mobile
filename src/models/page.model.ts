export interface PageInfo<T> {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
    content: T[]
}
  