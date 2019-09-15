//import packages
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


//Import the router files
// import Searchbar from "./components/searchBar";
import Navbar from "./components/navbar";

import Home from "./components/home";
import Aboutus from "./components/aboutus";

import DialysisCentre from "./components/dialysisCentre";
import BuildingDesign from "./components/building";
import Transport from "./components/transport";
import Disaster from "./components/disaster";
import DialysisHome from "./components/dialysisHome";

import GreenTools from "./components/greenTools";
import CarbonFootprint from "./components/carbonfootprint";
import Solar from "./components/solar";
import Water from "./components/water";
import Conference from "./components/conference";
import GreenroadMap from "./components/greenroadMap";

import ResourcesResearch from "./components/resourcesResearch";
import Survey from "./components/survey";
import ResourcesBlog from "./components/resourcesBlog";

import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>

      <div className="container">

        {/* <Searchbar /> */}

        <Navbar />

        <Route exact path="/" component={Home} />

        <Route path="/aboutUs" exact component={Aboutus} />

        <Route path="/dialysisCentre" exact component={DialysisCentre} />
        <Route path="/buildingDesign" exact component={BuildingDesign} />
        <Route path="/transport" exact component={Transport} />
        <Route path="/disaster" exact component={Disaster} />
        <Route path="/dialysisHome" exact component={DialysisHome} />

        <Route path="/greenTools" exact component={GreenTools} />
        <Route path="/carbonFootprint" exact component={CarbonFootprint} />
        <Route path="/solar" exact component={Solar} />
        <Route path="/water" exact component={Water} />
        <Route path="/conference" exact component={Conference} />
        <Route path="/greenroadMap" exact component={GreenroadMap} />

        <Route path="/resourcesResearch" exact component={ResourcesResearch} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/resourcesBlog" exact component={ResourcesBlog} />

        <Route path="/contact" exact component={Contact} />

        <Footer />

      </div>

    </BrowserRouter>

  );
}

export default App;

