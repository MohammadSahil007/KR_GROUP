// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Home } from "./components/home";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
  //   speed: 1000,
  //   speedAsDuration: true,
  // });
  
  // const App = () => {
    // };
    
    // export default App;
    
    
    // App.js
    
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/home';
// import About from './components/about';
import Services from './components/services';
import IndustriesWeServe from './components/IndustriesWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Navigation from './components/navigation';
import Main from './components/Main';
import JsonData from './data/data.json'
import Footer2 from './components/footer2';
import About2 from './components/About2'
import Carousel from './components/Carousel';
function App() {
  
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/" element={<Carousel/>} />
          {// <Route path="/about" element={<About data = {landingPageData.About} />} />
          }
          <Route path="/about" element={<About2/>} />
          <Route path="/services" element={<Services data = {landingPageData.Services} />} />
          <Route path="/industries-we-serve" element={<IndustriesWeServe data = {landingPageData.IndustriesWeServe} />} />
          <Route path="/why-choose-us" element={<WhyChooseUs data = {landingPageData.WhyChooseUs} />} />
          <Route path="/testimonials" element={<Testimonials data = {landingPageData.Testimonials} />} />
          <Route path="/contact" element={<Contact data = {landingPageData.Contact} />} />
        </Routes>
        <Footer2/>
      </div>
    </Router>
  );
}

  // return (
  //   <Router>
  //     <div>
  //       <Navigation />
  //       <Routes>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/about-us" component={AboutUs} />
  //         <Route path="/services" component={Services} />
  //         <Route path="/industries-we-serve" component={IndustriesWeServe} />
  //         <Route path="/why-choose-us" component={WhyChooseUs} />
  //         <Route path="/testimonials" component={Testimonials} />
  //         <Route path="/#contact" component={ContactUs} />
  //         </Routes>
  //         </div>
  //   </Router>

  // );


export default App;
