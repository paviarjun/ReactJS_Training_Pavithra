import React,{useCallback, useState} from "react";
import CallbackChild from "./CallbackChild.jsx";

const CallbackChild = () => {
    const[count, setCount] = useState(0);
    const handleClick = useCallback(()=>{
           setCount(count+1);
    },[count]);

    return(
        <>
        <h1>Count:{count}</h1>
        <CallbackChild onClick={handleClick}/>
        </>
        
    );
};

export default CallbackParent;