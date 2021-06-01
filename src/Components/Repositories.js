import React from 'react'
import {RepositoriesNotFound} from "./EmptyRepositiriesList";
import {Repository} from "./Repository";
import {Loader} from "./Loader";

export const Repositories = React.memo((props) => {

    const repositories = props.repos.data;

    if (props.repos.isLoading) {

        return (
            <Loader/>
        )
    }
    if (repositories.length) {
        return (
            <>
                <h1 className="repos-header">Repositories ({props.reposCount})</h1>
                <div className="repos-list">
                    {
                        repositories.map(repo => (
                            <Repository
                                html_url={repo.html_url}
                                name = {repo.name}
                                description = {repo.description}
                            />
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
