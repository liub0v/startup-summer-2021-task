import React, {useEffect, useState} from "react";
import {Profile} from "./Components/Profile";
import {Repositories} from "./Components/Repositories";
import {useRequest} from "./hooks/useRequest";
import {Loader} from "./Components/Loader";
import {InitialState} from "./Components/InitialState";
import {UserNotFound} from "./Components/UserNotFound";
import "./public/stylesheets/style.css";
import "./public/stylesheets/input-style.css"
import "./public/stylesheets/pagination.css"
import ReactPaginate from "react-paginate";

function App() {

    const initProfileData = {
        avatar_url: "",
        name: "",
        html_url: "",
        login: "",
        followers: 0,
        following: 0,
        public_repos: 0,
    }
    const initRepoData = {
        html_url: "",
        name: "",
        description: "",
    }

    const [usernameValue, setUsernameValue] = useState("");
    const reposInfo = useRequest(initRepoData);
    const profileInfo = useRequest(initProfileData);

    const [reposCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(()=>{

        usernameValue && reposInfo.request(`GET /${usernameValue}/repos`, {
                    page: page,
                    per_page: 4
        })

    },[page])

    const handlePageClick = (data) => {
        setPage(data.selected+1);
    }

    useEffect(()=>{
        setPageCount(profileInfo.data.public_repos);

    },[profileInfo.data])

    const [isInitialState, setIsInitialState] = useState(true);

    return (
        <div className="container">
            <div className="search">
                <div className="search-item">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20.5093 0C9.16808 0 0 9.16808 0 20.5093C0 29.5756 5.87436 37.2496 14.0238 39.966C15.0424 40.1698 15.416 39.5246 15.416 38.9813C15.416 38.5059 15.382 36.8761 15.382 35.1783C9.67742 36.4007 8.48897 32.7334 8.48897 32.7334C7.57216 30.3565 6.21392 29.7453 6.21392 29.7453C4.34635 28.489 6.34975 28.489 6.34975 28.489C8.42105 28.6248 9.50764 30.5942 9.50764 30.5942C11.3413 33.7182 14.2954 32.8353 15.4839 32.292C15.6537 30.9677 16.1969 30.0509 16.7742 29.5416C12.2241 29.0662 7.43633 27.3005 7.43633 19.4227C7.43633 17.1817 8.25127 15.348 9.5416 13.9219C9.33786 13.4126 8.62479 11.3073 9.74533 8.48896C9.74533 8.48896 11.4771 7.94567 15.382 10.5942C17.0119 10.1528 18.7776 9.91511 20.5093 9.91511C22.2411 9.91511 24.0068 10.1528 25.6367 10.5942C29.5416 7.94567 31.2733 8.48896 31.2733 8.48896C32.3939 11.3073 31.6808 13.4126 31.4771 13.9219C32.8014 15.348 33.5823 17.1817 33.5823 19.4227C33.5823 27.3005 28.7946 29.0323 24.2105 29.5416C24.9576 30.1868 25.6027 31.4092 25.6027 33.3446C25.6027 36.0951 25.5688 38.3022 25.5688 38.9813C25.5688 39.5246 25.9423 40.1698 26.961 39.966C35.1104 37.2496 40.9847 29.5756 40.9847 20.5093C41.0187 9.16808 31.8166 0 20.5093 0Z"
                              fill="white"/>
                    </svg>
                </div>
                <div className="search-item">
                    <form onSubmit={(event) => {

                        usernameValue ? setIsInitialState(false) : setIsInitialState(true);
                        setPage(1)
                        reposInfo.request(`GET /${usernameValue}/repos`, {
                            page: page,
                            per_page: 4
                        });
                        profileInfo.request(`GET /${usernameValue}`, {});
                        event.preventDefault();
                    }}>
                        <input type="text" value={usernameValue} onChange={e => setUsernameValue(e.target.value)}
                               placeholder="username"/>
                    </form>
                </div>
            </div>
            {
                isInitialState ? (
                    <InitialState/>
                ) : (

                    ( false
                        // profileInfo.isLoading || reposInfo.isLoading
                    ) ? (
                        <Loader/>
                    ) : ( true
                        //reposInfo.status === 200 && profileInfo.status === 200
                         ) ? (
                        <div className="main-page">
                            <div className="user-info">

                                <div className="profile">
                                    <Profile data={profileInfo.data}/>
                                </div>
                                <div className="repos">
                                    <Repositories data={reposInfo.data} count={reposCount} />
                                </div>
                            </div>
                            <div className="main-page-paginator">

                                {/*<div> {4*page-3}-{4*page-4+} of {reposCount} items</div>*/}
                                <div>
                                    <ReactPaginate
                                        previousLabel={'<'}
                                        nextLabel={'>'}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(reposCount/ 4)}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={3}
                                        onPageChange={handlePageClick}
                                        breakClassName={'break-me'}
                                        containerClassName={'pagination'}
                                        previousLinkClassName={"pagination__link"}
                                        nextLinkClassName={"pagination__link"}
                                        disabledClassName={"pagination__link--disabled"}
                                        activeClassName={"pagination__link--active"}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <UserNotFound/>
                    )



                )
            }
        </div>
    );
}

export default App;
