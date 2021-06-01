import React from "react"

export const Repository = (props) => {

    return (
        <div className="repos-list-item">
            <a rel="noreferrer" target="_blank" href={props.html_url}>
                {props.name}
            </a>
            <p>
                {props.description}
            </p>
        </div>

    )
}
