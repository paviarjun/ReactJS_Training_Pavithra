// import React from "react";
//import Home from "./Home.jsx";
// import Math from "./Math.jsx";
// import Displayoptical from "./Displayoptical.jsx";
// import Useref from "./Useref.jsx";
// import MemoExample from "./MemoExample.jsx"
// import ContextProvider from "./ContextExample.jsx";
// import Home from "./Home.jsx";

// const App = () => {
  //const [name, setName] = useState("Xebia");
  // return (
    // <ContextProvider name="welcome pavithra">
    //   <Home/>
    // </ContextProvider>
    // <MemoExample/>
    // <Home name="Xebia"/>
   // <Home name={name} setName={setName} />
  //  <Math/>
  // <DisplayOptical/>
  // <Useref />


  // );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";

const App = () =>{
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='layout' element={<Layout/>}/>
            <Route path='home' element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
