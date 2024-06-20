import React from "react";
const Display = (props) => {
        const sum= props.add(2,3);
        return (
        <div>sum of two numbers is{sum}</div>
        );
      };
export default Display;