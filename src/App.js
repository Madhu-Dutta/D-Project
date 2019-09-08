//import packages
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


//Import the router files
import Searchbar from "./components/searchBar";
import Navbar from "./components/navbar";

import Home from "./components/home";
import Aboutus from "./components/aboutus";

import DialysisCentre from "./components/dialysisCentre";
import DialysisHome from "./components/dialysisHome";

import GreenTools from "./components/greenTools";
import GreenroadMap from "./components/greenroadMap";

import ResourcesResearch from "./components/resourcesResearch";
import ResourcesBlog from "./components/resourcesBlog";

import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>

      <div className="container">
        
      <Searchbar />

      <Navbar />

      <Route exact path="/" component={Home} />

      <Route path="/aboutUs" exact component={Aboutus} />

      <Route path="/dialysisCentre" exact component={DialysisCentre} />
      <Route path="/dialysisHome" exact component={DialysisHome} />

      <Route path="/greenTools" exact component={GreenTools} />
      <Route path="/greenroadMap" exact component={GreenroadMap} />

      <Route path="/resourcesResearch" exact component={ResourcesResearch} />
      <Route path="/resourcesBlog" exact component={ResourcesBlog} />

      <Route path="/contact" exact component={Contact} />

      <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;

