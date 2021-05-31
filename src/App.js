import React, {useState} from "react";
import {useRequest} from "./hooks/useRequest";

import {InitialState} from "./Components/InitialState";
import {UserNotFound} from "./Components/UserNotFound";
import "./public/stylesheets/style.css";
import "./public/stylesheets/input-style.css"
import "./public/stylesheets/pagination.css"

import {Search} from "./Components/Search";
import {Container} from "./Components/Container";
const initProfileData = {
    avatar_url: "",
    name: "",
    html_url: "",
    login: "",
    followers: 0,
    following: 0,
    public_repos: 0,
}
const initRepoData = [{
    html_url: "",
    name: "",
    description: "",
}]

function App() {

    const [usernameValue, setUsernameValue] = useState("");
    const [isInitialState, setIsInitialState] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);

    const reposInfo = useRequest(initRepoData);
    const profileInfo = useRequest(initProfileData);



    const handleSubmit = (event) => {



        usernameValue ? setIsInitialState(false) : setIsInitialState(true);

        reposInfo.request(`GET /${usernameValue}/repos`, {
            page: 1,
            per_page: 4
        });
        profileInfo.request(`GET /${usernameValue}`, {});
        event.preventDefault();
    }

    return (
        <div className="container">
            <Search
                handleSubmit={handleSubmit}
                setUsernameValue={setUsernameValue}
            />
            {
                isInitialState ? (
                    <InitialState/>
                ) : ( profileInfo.isError ? (
                    <UserNotFound/>
                    ) : (
                    <Container
                        profileInfo = {profileInfo}
                        reposInfo = {reposInfo}
                        usernameValue = {usernameValue}
                        trigger = {isNewUser}
                    />
                    )
                )
            }

        </div>
    );
}

export default App;
