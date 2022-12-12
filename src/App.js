import React from "react";
import {Header,About,Worlds,Works,NewWorlds,Map,Insight,Review,Footer} from "./components/index"

function App() {
  return (
    <div className="main">
       <Header/>
       <About/>
       <Worlds/>
       <Works/>
       <NewWorlds/>
       <Map/>
       <Insight/>
       <Review/>
       <Footer/>
       
    </div>
  );
}

export default App;
