//https://www.youtube.com/watch?v=IYCa1F-OWmk (tutorial on frontend pagination)
//https://github.com/bradtraversy/simple_react_pagination

import React from 'react';
const Pagination = ({ questionsPerPage, totalQuestions, setCurrentPage }) => {
  
  //https://www.techiedelight.com/create-array-from-1-n-javascript/
  const pageNumbers = [...Array(totalQuestions / questionsPerPage).keys()].map(x => ++x);

  return (
    <nav>
      <ul className='pagination'>
        <li className='page-item'><a href='#!' className='page-link'>Next</a></li>
        <li className='page-item'><a href='#!' className='page-link'>Previous</a></li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => setCurrentPage(number)} href='#!' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;