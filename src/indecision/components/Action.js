import React from "react";

const Action = (props) => (
      <div>
        <button
        className="big-button-indecision"
        disabled={!props.hasOptions} 
        onClick={props.handlePick}>
        What should I do?</button>
      </div>
    )

export default Action;