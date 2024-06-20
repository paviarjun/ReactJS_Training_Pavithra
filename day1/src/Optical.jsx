import React from "react";
import DisplayOptical from './src/DisplayOptical.jsx';
const Optical = (props) => {
    const {data} = props;
    return(
        <div>
            <div>Name: {data.name}</div>
            <div>Type: {data.type}</div>
            <div>Power: {data.pow}</div>
        </div>
    );
};
export default Optical;
 