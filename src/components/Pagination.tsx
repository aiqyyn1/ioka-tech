import React, { useRef, useEffect } from 'react';
import { usePagination } from '../hooks/usePagination';
import './Pagination.scss';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  isLooped?: boolean;
  jumpStep?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  isLooped = false,
  jumpStep = 5,
}) => {
  const { currentPage, goToPage, next, prev, nextMultiple, prevMultiple } = usePagination({
    totalPages,
    initialPage,
    isLooped,
  });

  const pageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (pageRefs.current[currentPage - 1]) {
      pageRefs.current[currentPage - 1]?.focus();
    }
  }, [currentPage]);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => prevMultiple(jumpStep)}
        disabled={!isLooped && currentPage === 1}
      >
        {'<<'}
      </button>
      <button
        className="pagination__button"
        onClick={prev}
        disabled={!isLooped && currentPage === 1}
      >
        {'<'}
      </button>
      <ul className="pagination__list">
        <ul className="pagination__list">
          {pages.map((page, index) => (
            <li key={page} className="pagination__item">
              <button
                ref={(el) => (pageRefs.current[index] = el)}
                className={`pagination__page ${currentPage === page ? 'active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </ul>
      <button
        className="pagination__button"
        onClick={next}
        disabled={!isLooped && currentPage === totalPages}
      >
        {'>'}
      </button>
      <button
        className="pagination__button"
        onClick={() => nextMultiple(jumpStep)}
        disabled={!isLooped && currentPage === totalPages}
      >
        {'>>'}
      </button>
    </div>
  );
};
