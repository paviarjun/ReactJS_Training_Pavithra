// import React,{useRef} from 'react';
// const Useref = () => {
//     const ref = useRef(0);
//     const handleClick = () => {
//         ref.current++;
//         console.log("value of ref is" +ref.current);
//     }
//     return(
//         <div><input type="button" value="click me" name="button" onClick={handleClick}/></div>
//     );
// };

// export default Useref;

// import React,{useRef, useEffect} from 'react';
// const Useref = () => {
//     const ref = useRef(null);
//     useEffect(() =>{
//        ref.current.focus();
//     }, []);
//     return(
//         <div>
//             <input type="text" name="text" ref={ref}/>
//         </div>
//     );
// };

// export default Useref;


// import React, { useRef } from 'react';

// const Useref = () => {
//   const inputRef = useRef();

//   const handleInputChange = () => {
//     const inputValue = inputRef.current.value;
//     if (/\d/.test(inputValue)) {
//       inputRef.current.value = '';
//       alert('Only strings without numbers are allowed');
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const inputValue = inputRef.current.value;
//     if (!/\d/.test(inputValue)) {
//       alert(`Form submitted with value: ${inputValue}`);
//     } else {
//       alert('Form contains invalid input.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="stringInput">Enter text: </label>
//         <input id="stringInput" ref={inputRef} type="text" onChange={handleInputChange} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Useref;

import React,{useRef, useEffect} from 'react';
const Useref = () => {
    const ref = useRef(null);
    useEffect(() => {
       document.getElementById('errMsg').hidden = true;
       ref.current.focus();
    }, []);

    const handleName = (e) => {
            const inputValue = inputRef.current.value;
            var isNum = /^(?=.*[a-zA-Z])(?=.*[A-Za-z0-9]).+$/.test(text);
            if (isNum) 
                document.getElementById('errMsg').hidden = false;
            else
             document.getElementById('errMsg').hidden = true;
    };
    return(
        <div>
            <input type="text" name="text" ref={ref} onChange={(e)=>handleName(e)}/><br/>
            <span id="errmsg">pls enter only string not a alphanum</span>
        </div>
    );
};

export default Useref;