import React from 'react'
import {RepositoriesNotFound} from "./RepositiriesNotFound";
import ReactPaginate from 'react-paginate';
import {Repository} from "./Repository";
import "../public/stylesheets/repos-style.css"

export const Repositories = React.memo((props) => {


        const reposData = props.data;
        reposData.length>0 ? console.log("Show: "+reposData[0].name) : console.log("Show: empty")

        return (
            <>
                {reposData.length > 0 ? (
                    <>
                        <h1 className="repos-header">Repositories ({props.count})</h1>
                        <div className="repos-list">
                            {
                                reposData.map(item => (
                                    <Repository item={item}/>
                                ))
                            }
                        </div>

                    </>
                ) : (
                    <RepositoriesNotFound/>
                )
                }

            </>
        )
    }
)
