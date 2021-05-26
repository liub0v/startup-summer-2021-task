import React, {useState} from 'react'
import {RepositoriesNotFound} from "./RepositiriesNotFound";
import ReactPaginate from 'react-paginate';

export const Repositories = React.memo((props) => {

        const reposData = props.data.data;
        const [pageCount,setPageCount]=useState(0);

        const handlePageClick = ()=>{

        }

        return (

            <div>

                {reposData.length > 0 ? (
                    <div>
                        <h1>Repositories</h1>
                        <ul>
                            {
                                reposData.map(item => (
                                    <li>
                                        <a target="_blank" href={item.html_url}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>) : (
                    <RepositoriesNotFound/>
                )
                }
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
)
