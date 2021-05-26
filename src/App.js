import React, {useState} from "react";
import {Profile} from "./Components/Profile";
import {Repositories} from "./Components/Repositories";
import {useRequest} from "./hooks/useRequest";
import {Loader} from "./Components/Loader";
import {InitialState} from "./Components/InitialState";
import {UserNotFound} from "./Components/UserNotFound";

function App() {

    const [usernameValue, setUsernameValue] = useState("");
    const reposInfo = useRequest();
    const profileInfo = useRequest();

    const [isInitialState, setIsInitialState] = useState(true);

    return (
        <div className="container">
            <div className="search">
                <h1>Enter username</h1>
                <form onSubmit={(event) => {
                    usernameValue ? setIsInitialState(false) : setIsInitialState(true) ;
                    reposInfo.request(`GET /${usernameValue}/repos`);
                    profileInfo.request(`GET /${usernameValue}`);

                    event.preventDefault();
                }}>
                    <input type="text" value={usernameValue} onChange={e => setUsernameValue(e.target.value)}
                           placeholder="username"/>
                </form>
            </div>
            {
                isInitialState ? (
                    <InitialState/>
                ) : (

                    (profileInfo.isLoading || reposInfo.isLoading) ? (
                        <Loader/>
                    ) : (reposInfo.status === 200 && profileInfo.status === 200) ?  (
                        <div>
                            <Repositories data = {reposInfo.data}/>
                            <Profile data = {profileInfo.data}/>
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
