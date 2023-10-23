import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import NavigateExample from "./pages/NavigateExample";

import NavBar from "./components/Navbar";

const App = () => {

return (

  <Router>
   <NavBar />
    <Routes>
      <Route path="/" element={<h1><Home/></h1>}/>
      <Route path="/about" element={<h1><About/></h1>}/>
      <Route path="/navigate-example" element={<h1><NavigateExample/></h1>}/>

      <Route path="*" element={<h1><PageNotFound /></h1>} />
    </Routes>
  </Router>
)
  
};


export default App;
