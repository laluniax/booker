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
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </St.Container>
  );
};

export default Pagination;
