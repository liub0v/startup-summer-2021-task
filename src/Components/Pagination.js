import React from 'react';
import ReactPaginate from "react-paginate";
import {PER_PAGE} from "../constants";

export const Pagination = (props) => {

    const reposCount = props.reposCount;
    const startRepoNumber = 4 * props.currentPage - 3;
    const endRepoItem = Math.min(4 * props.currentPage, reposCount);

    return (
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
                containerClassName={'pagination'}
                disabledClassName={"pagination-link-disabled"}
                activeClassName={"pagination-link-active"}
            />
        </div>

    )

}

