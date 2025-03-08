import { useState, useRef } from 'react';
import { Pagination as PaginationClass } from '../models/Pagination';
import { UsePaginationProps } from '../types/usePagination';


export const usePagination = ({
  totalPages,
  initialPage = 1,
  isLooped = false,
}: UsePaginationProps) => {
  const paginationRef = useRef(new PaginationClass(totalPages, initialPage, isLooped));
  const [currentPage, setCurrentPage] = useState(initialPage);
  const update = () => {
    setCurrentPage(paginationRef.current.getCurrentPage());
  };

  const goToPage = (page: number) => {
    paginationRef.current.goToPage(page);
    update();
  };

  const next = () => {
    paginationRef.current.next();
    update();
  };

  const prev = () => {
    paginationRef.current.prev();
    update();
  };

  const nextMultiple = (steps: number) => {
    paginationRef.current.nextMultiple(steps);
    update();
  };

  const prevMultiple = (steps: number) => {
    paginationRef.current.prevMultiple(steps);
    update();
  };

  return { currentPage, totalPages, goToPage, next, prev, nextMultiple, prevMultiple };
};
