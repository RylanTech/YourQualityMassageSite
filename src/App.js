import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Schedule from "./Schedule";
import HomePage from "./HomePage"
import About from "./About";
import Location from "./Location";
import Msg1 from "./Msg1"
import Msg2 from "./Msg2";
import Msg3 from "./Msg3";
import Msg4 from "./Msg4";
import Msg5 from "./Msg5";
import Msg6 from "./Msg6";
import Msg7 from "./Msg7";
import Msg8 from "./Msg8";
import Msg9 from "./Msg9";
import Msg10 from "./Msg10";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/swedishmassage" element={<Msg1/>}/> 
          <Route path="/deeptissuemassage" element={<Msg2/>}/> 
          <Route path="/triggerpointmassage" element={<Msg3/>}/> 
          <Route path="/hotstonemassage" element={<Msg4/>}/> 
          <Route path="/cbdmassage" element={<Msg5/>}/> 
          <Route path="/aromatherapymassage" element={<Msg6/>}/> 
          <Route path="/myofasicalrekeasetherapy" element={<Msg7/>}/> 
          <Route path="/sportsmassage" element={<Msg8/>}/> 
          <Route path="/aprenatalmassage" element={<Msg9/>}/> 
          <Route path="/lymphaticdrainagemassage" element={<Msg10/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="*" element={<h1>Component Not Found</h1>}/>
        </Route>
        <Route path="*" element={<p>Page Not Found</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
