import React from "react";

const Child = (props) => {
    return(
        <div>
            <h2>{props.child.title}</h2>
            <button onClick={() => props.setSelected(props.child.button)}>{props.child.button}</button>
        </div>
    )
}
export default Child