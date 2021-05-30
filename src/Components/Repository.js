import React from "react"

export const Repository = (props) => {

    return (
        <div className="repos-list-item">
            <a  rel="noreferrer" target="_blank" href={props.item.html_url}>
                {props.item.name}
            </a>
            <p> {props.item.description}</p>
        </div>

    )
}
