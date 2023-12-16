import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ info, setPage, page }) => {
    const pages = info && info.pages ? info.pages : 1;

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const paginationItems = [];
  for (let number = 1; number <= pages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination size="lg">{paginationItems}</Pagination>;
};

export default CustomPagination;