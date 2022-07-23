import Link from 'next/link';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const PaginationLink = styled.a`
  padding: 2%;
  margin: 1%;
  background: ${(props) => (!props.disabled ? 'orange' : 'lightGrey')};
  pointer-events: ${(props) => (!props.disabled ? 'all' : 'none')};
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  background: orange;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const Pagination = ({ currentPage, hasMore }) => {
    return (
        <PaginationWrapper>
            <Link
                href={`/questions?page=${parseInt(currentPage) - 1}`}
            >
                <PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
            </Link>
            <Link
                href={`questions?page=${parseInt(currentPage) + 1}`}
            >
                <PaginationLink disabled={!hasMore}>Next</PaginationLink>
            </Link>
        </PaginationWrapper>
    )
}

export default Pagination;