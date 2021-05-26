import React from 'react'

export const Profile = React.memo((props) => {

    const userData = props.data.data;

        return (
            <div>
                <h1>ProfileInfo</h1>
                <img width="100" src={userData.avatar_url}/>
                <div>
                    <a target="_blank" href={userData.html_url}> {userData.login}</a>
                </div>
                <div>
                    <label>{userData.name}</label>
                </div>
                <div>Followers: {userData.followers}</div>
                <div>Following: {userData.following}</div>
            </div>
        )

    }
)
