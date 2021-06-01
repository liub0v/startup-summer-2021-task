import React, {useEffect, useState} from 'react'
import {Profile} from "./Profile";
import {Repositories} from "./Repositories";
import {Pagination} from "./Pagination";
import {PER_PAGE} from "../constants";

export const UserPage = (props) => {

    const [reposCount, setReposCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const profile = props.profile;
    const repos = props.repos;
    const username = props.username;

    useEffect(() => {
        setReposCount(profile.data.public_repos);
        setCurrentPage(1);
    }, [profile.data])

    useEffect(() => {

        username && repos.request(`GET /${username}/repos`, {
            page: currentPage,
            per_page: PER_PAGE,
        })

    }, [currentPage])

    const handleChange = ({selected: page}) => {
        setCurrentPage(page + 1);
    }

    return (
        <div className="main-page">
            <div className="info-wrapper">
                <div className="profile">
                    <Profile
                        profile={profile}
                    />
                </div>
                <div className="repos">
                    <Repositories
                        repos={repos}
                        reposCount={reposCount}
                    />
                </div>
            </div>
            {
                reposCount > 4 && !props.profile.isLoading && (
                    <Pagination
                        currentPage={currentPage}
                        reposCount={reposCount}
                        handleChange={handleChange}
                    />
                )
            }

        </div>
    )
}

