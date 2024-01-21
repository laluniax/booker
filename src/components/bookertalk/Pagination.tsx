import { useState } from 'react';
import * as St from './Pagination.styled';

type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
};

const Pagination = ({ postsPerPage, totalPosts, paginate }: PaginationProps) => {
  const [selectedPage, setSelectedPage] = useState(1); // 선택된 페이지 번호 상태추가
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number: number) => {
    setSelectedPage(number); // 선택된 페이지 번호 업데이트
    paginate(number);
  };

  return (
    <St.Container>
      <St.PaginationUl className="pagination">
        {pageNumbers.map((number) => (
          <St.PaginationLi key={number} className="page-item">
            <St.PaginationSpan
              onClick={() => handlePageClick(number)}
              className={`page-link ${selectedPage === number ? 'selected' : ''}`}>
              {number}
            </St.PaginationSpan>
          </St.PaginationLi>
        ))}
      </St.PaginationUl>
    </St.Container>
  );
};

export default Pagination;
