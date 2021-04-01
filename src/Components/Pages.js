import React from "react";

import Pagination from "react-bootstrap/Pagination";

export default function Pages({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      <Pagination>
        {goToPrevPage && <Pagination.Prev onClick={goToPrevPage} />}
        {goToNextPage && <Pagination.Next onClick={goToNextPage} />}
      </Pagination>
    </div>
  );
}
