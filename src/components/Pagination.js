//https://www.youtube.com/watch?v=IYCa1F-OWmk (tutorial on frontend pagination)
//https://github.com/bradtraversy/simple_react_pagination

import React from 'react';
const Pagination = ({ questionsPerPage, totalQuestions, setCurrentPage, getCurrentPage }) => {
  
  //https://www.techiedelight.com/create-array-from-1-n-javascript/
  const pageNumbers = [...Array(totalQuestions / questionsPerPage).keys()].map(x => ++x);

  return (
    <nav style={{marginTop: '50px'}}>
      <ul className='pagination'>
        <li className='page-item'><a href='#!' className='page-link' onClick={() => setCurrentPage(getCurrentPage() + 1)}>Next</a></li>
        <li className='page-item'><a href='#!' className='page-link' onClick={() => setCurrentPage(getCurrentPage() - 1)}>Previous</a></li>
        {pageNumbers.map(number => (
          <li key={number} className={(getCurrentPage() === number) ? 'page-item active' : 'page-item'}>
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