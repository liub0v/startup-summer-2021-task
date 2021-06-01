import React from 'react';
import ReactPaginate from "react-paginate";
import {PER_PAGE} from "../constants";

export const Pagination = (props) => {

    const reposCount = props.reposCount;
    const startRepoNumber = 4 * props.currentPage - 3;
    const endRepoItem = Math.min(4 * props.currentPage, reposCount);

    return (
        <div className="main-page-paginator">
            <div className="pagination-wrapper">
                <div className="pagination-label">
                    {startRepoNumber === endRepoItem ? (startRepoNumber) : (`${startRepoNumber}-${endRepoItem}`)} of {reposCount} items
                </div>

                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(reposCount / PER_PAGE)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={props.handleChange}
                    breakClassName={'break-me'}
                    containerClassName={'pagination'}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </div>
    )

}

