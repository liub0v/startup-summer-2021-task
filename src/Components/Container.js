import React, {useEffect, useState} from 'react'
import {Profile} from "./Profile";
import {Repositories} from "./Repositories";
import {Paginator} from "./Paginator";
export const Container = (props)=>{

    const [reposCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const profileInfo = props.profileInfo;
    const reposInfo = props.reposInfo;
    const usernameValue = props.usernameValue;

    useEffect(() => {
        setPageCount(profileInfo.data.public_repos);
        setPage(1);

    }, [profileInfo.data])
    useEffect(() => {

        usernameValue && reposInfo.request(`GET /${usernameValue}/repos`, {
            page: page,
            per_page: 4
        })

    }, [page])

    const handleChange = (data) => {
        console.log("Changed page: " + data.selected)
        setPage(data.selected + 1);
    }

    return (
        <div className="main-page">
            <div className="info-wrapper">
                <div className="profile">
                    <Profile data={profileInfo.data}
                             isLoading={profileInfo.isLoading}
                    />
                </div>
                <div className="repos">
                    <Repositories
                        data={reposInfo.data}
                        isLoading={reposInfo.isLoading}
                        count={reposCount}
                    />
                </div>
            </div>
            {
                reposCount > 4 && !profileInfo.isLoading && (
                    <Paginator
                        currentPage={page}
                        reposCount={reposCount}
                        handleChange={handleChange}
                    />
                )
            }

        </div>
    )
}
