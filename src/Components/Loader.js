import React from "react";
import "../public/stylesheets/loader-style.css"
export function Loader(isLoading) {

    return(
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}
