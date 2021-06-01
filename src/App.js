import React, {useState} from "react";
import {useRequest} from "./hooks/useRequest";
import {InitialState} from "./Components/InitialState";
import {UserNotFound} from "./Components/UserNotFound";
import {Search} from "./Components/Search";
import {UserPage} from "./Components/UserPage";
import "./public/stylesheets/style.css";
import {INIT_PROFILE, INIT_REPOSITORIES, PER_PAGE} from "./constants";

function App() {

    const [username, setUsername] = useState("");
    const [isInitialState, setIsInitialState] = useState(true);
    const repos = useRequest(INIT_PROFILE);
    const profile = useRequest(INIT_REPOSITORIES);


    const handleSubmit = (event) => {

        if (username) {
            setIsInitialState(false)
            repos.request(`GET /${username}/repos`, {
                page: 1,
                per_page: PER_PAGE
            });
            profile.request(`GET /${username}`, {});
        } else {
            setIsInitialState(true);
        }

        event.preventDefault();
    }

    return (
        <div className="container">
            <Search
                handleSubmit={handleSubmit}
                setUsername={setUsername}
            />
            {
                isInitialState ? (
                    <InitialState/>
                ) : (profile.isError ? (
                        <UserNotFound/>
                    ) : (
                        <UserPage
                            profile={profile}
                            repos={repos}
                            username={username}
                        />
                    )
                )
            }

        </div>
    );
}

export default App;
