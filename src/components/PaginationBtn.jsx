import { useEffect, useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import {
  onNavigateNext,
  onNavigatePrev,
  onClickCurrentPage,
} from '../features/dataSlice';

const PaginationBtn = ({ currentPage, totalPages, pages, visibleData }) => {
  const dispatch = useDispatch();

  const nextPage = () => {
    if (currentPage !== totalPages) dispatch(onNavigateNext());
  };

  const prevPage = () => {
    if (currentPage !== 1) dispatch(onNavigatePrev());
  };

  useEffect(() => {
    if (visibleData.length === 0 && currentPage > 1) {
      dispatch(onNavigatePrev());
    }
  }, [visibleData]);

  return (
    <section className='container-pgn'>
      <button type='button' className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </button>
      <div className='btn-container'>
        {pages.map((page, index) => {
          return (
            <button
              key={page}
              className={page === currentPage ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(onClickCurrentPage(page))}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button type='button' className='next-btn' onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </section>
  );
};
export default PaginationBtn;
