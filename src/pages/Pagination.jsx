import React from 'react'

const Pagination = ({productsPerPage, pokemonsTotal, currentPage, setCurrentPage}) => {

  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(pokemonsTotal / productsPerPage); i++){
    pageNumbers.push(i)
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }

  return (
    <div>
      <nav className ="pagination is-centeredv  m-6" role="navigation" aria-label="pagination">
        <button className ={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage} disabled = {currentPage <= 1}>Anterior</button>
        <button className ={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage} disabled = {currentPage >= 13}>Siguiente</button>
        <ul className ="pagination-list">
          
          {
            pageNumbers.map(noPage => (
              <li key={noPage}>
                <a className ={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
                onClick={() => onSpecificPage(noPage)}
                >
                  {noPage}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Pagination