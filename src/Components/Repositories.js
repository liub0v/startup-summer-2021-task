import React from 'react'
import {RepositoriesNotFound} from "./RepositiriesNotFound";
import {Repository} from "./Repository";
import "../public/stylesheets/repos-style.css"
import {Loader} from "./Loader";

export const Repositories = React.memo((props) => {


    const reposData = props.data;

    if (props.isLoading) {
        return (
            <Loader/>
        )
    }
    if (reposData.length > 0) {
        return (
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
        )
    } else {
        return (
            <RepositoriesNotFound/>
        )
    }


})
