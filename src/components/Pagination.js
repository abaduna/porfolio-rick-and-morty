import React from 'react'


const Pagination = ({ info, setPage, page }) => {
    
let active = page;
let items = [];
console.log(info);
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <Pagination size="lg">{items}</Pagination>
  )
}

export default Pagination