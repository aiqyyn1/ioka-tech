export interface UsePaginationProps {
  totalPages: number;
  initialPage?: number;
  isLooped?: boolean;
}
export interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  isLooped?: boolean;
  jumpStep?: number;
}