import * as St from './Pagination.styled';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <St.Container>
      <St.PaginationUl className="pagination">
        {pageNumbers.map((number) => (
          <St.PaginationLi key={number} className="page-item">
            <St.PaginationSpan onClick={() => paginate(number)} className="page-link">
              {number}
            </St.PaginationSpan>
          </St.PaginationLi>
        ))}
      </St.PaginationUl>
    </St.Container>
  );
};

export default Pagination;
