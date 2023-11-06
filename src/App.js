import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectsIndex from "./pages/projects/Index"
import PageNotFound from "./pages/PageNotFound";

//import components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

return (

  <>
 

  <Router>
    <div className="container mx-auto">
    <NavBar />
    <Routes>
      <Route path="/" element={<h1><Home/></h1>}/>
      <Route path="/about" element={<h1><About/></h1>}/>
      <Route path="/contact" element={<h1><Contact/></h1>}/>
      <Route path="/projects" element={<h1><ProjectsIndex/></h1>}/>
      {/* <Route path="/projects" element={<h1><Projects/></h1>}/> */}
      

      <Route path="*" element={<h1><PageNotFound /></h1>} />
    </Routes>
    </div>
   <Footer/>
    
  </Router>

  </>
)
  
};


export default App;
