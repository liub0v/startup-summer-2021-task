import React from 'react';
import ReactPaginate from "react-paginate";

export const Paginator = (props) => {

    const page = props.currentPage;
    const reposCount = props.reposCount;
    console.log("Paginator render")
    const handleActive = (data) => {
        // console.log("Active age: "+data.selected)
    }
    return (
        <div className="main-page-paginator">
            <div className="pagination-wrapper">
                <div
                    className="pagination-label"> {4 * page - 3}-{Math.min(4 * page, reposCount)} of {reposCount} items
                </div>

                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(reposCount / 4)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={props.handleChange}
                    onPageActive={handleActive}
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

