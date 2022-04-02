import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

export const CustomPagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(number);
    }
    setPages([...items]);
  }, [totalPages]);
  return (
    <Pagination>
      {pages.map((number) => (
        <Pagination.Item key={number} active={number == currentPage} onClick={()=>setCurrentPage(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};
