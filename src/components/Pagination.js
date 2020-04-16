import React from 'react';

function Pagination({changePage, currentPage, totalResults,perPage}) {
  var pageNumbers = [];
 
  const totalPages =Math.ceil(totalResults/perPage);
  const firstPagination = Math.floor(currentPage/5)*3 +1;
  for(let i=firstPagination; i <=10+firstPagination; i++){
      pageNumbers.push(i);
  }
  
    return (
        
            <nav aria-label="Page navigation example">
                <ul className="pagination  justify-content-center">
                    <li className={currentPage===1?"page-item disabled":"page-item"}>
                    <a className="page-link"  aria-disabled={currentPage===1} onClick={()=>changePage(currentPage-1)}>Previous</a>
                    </li>
                    {pageNumbers.map((num)=>{
                        return(<li key={num} className={currentPage === num ? "page-item active page-num": "page-num page-item"}>
                            <a  className="page-link" onClick={()=>changePage(num)}>{num}</a>
                        </li>)
                    })}
                    
                    <li className={currentPage===totalPages?"page-item disabled":"page-item"}>
                    <a className="page-link" onClick={()=>changePage(currentPage+1)} aria-disabled={currentPage===totalPages}>Next</a>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Pagination;
