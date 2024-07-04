import React,{useState,useEffect} from "react";
import Header from "./header";
import Home from "./home";
import Home2 from './Home2'
import Contact from "./contact";
import JsonData from "../data/data.json";
import Crousel from './Crousel'

const Main = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Home data={landingPageData.Home} />
      <Home2 data={landingPageData.Home} />
  {    // <Contact data={landingPageData.Contact} />
  }
    </div>
  );
};

export default Main;
