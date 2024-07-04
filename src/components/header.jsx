// import React from "react";

// export const Header = (props) => {
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12   col-md-offset-0 intro-text">
//                 <h2 style={{color:'white',fontSize:"48"}}>
//                   K.R. Group - Your Partner in International Recruitment

//                   <span></span>
//                 </h2>
//                 <p style = {{fontSize:'34',fontFamily:'"Raleway",sans-serif'}}>Connecting Talent Across Borders</p>
//                 <a
//                   href="#features"
//                   className="btn btn-custom btn-lg page-scroll"
//                 >
//                   Learn More
//                 </a>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'img/about/c2.jpg',
//     'img/about/c1.jpg',
//     'img/about/c3.jpg'
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [images.length]);

//   return (
//     <header id="header">
//       <div
//         className="intro"
//         style={{
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           width:"100%",height:"100%",
//           transition: 'background-image 0.5s ease-in-out',
//         }}
//       >
//         <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} className="overlay">
//           <div  className="container">
//             <div className="row">
//               <div className="col-md-12 col-md-offset-0 intro-text">
//                 <h2 style={{ color: 'white', fontSize: '48px' }}>
//                   K.R. Group - Your Partner in International Recruitment
//                   <span></span>
//                 </h2>
//                 <p style={{ fontSize: '34px',color:"#fffa", fontFamily: '"Raleway", sans-serif' }}>
//                   Connecting Talent Across Borders
//                 </p>
//                 <a href="#features" className="btn btn-custom btn-lg page-scroll">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import Home3 from './Home3'
import JsonData from "../data/data.json";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'img/about/c0.jpg',
    'img/about/c5.jpg',
    'img/about/c6.jpg',
    'img/about/c1.jpg',
    'img/about/c2.jpg',
    'img/about/c3.jpg',
  ];
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          position: 'relative',
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 intro-text">
                <h2 style={{ color: 'gold', fontSize: '75px' }}>
                  K.R. Group 
                  <span></span>
                </h2>
                {// <h2 style={{ color: 'white', fontSize: '44px' }}>
                // Your Partner in International Recruitment
                //   <span></span>
                // </h2>
                /*
                <p style={{ fontSize: '34px', fontFamily: '"Raleway", sans-serif' }}>
                  Connecting Talent Across Borders
                </p>*/}
                  <Home3 data={landingPageData.Home2}/>
              {  // <div id="features" className="text-center">
                //   <div  className="container">
                //   <div className="row">
                //       {props.data
                //         ? props.data.map((d, i) => (
                //             <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-2">
                //               {" "}
                //               <i  area-hidden='true' className={d.icon}></i>
                //               <h3 style={{padding:'20px 0px'}} >{d.title}</h3>
                //               <p style={{display:'block',textAlign:'justify',paddingBottom:100}}>{d.text}</p>
                //             </div>
                //           ))
                //         : "Loading..."}
                //     </div>
                //   </div>
                // </div>
              }
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
