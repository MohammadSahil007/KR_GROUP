// import React from "react";
// import myImg from '../images/kr-logo.png' 
// export const Navigation = (props) => {
//   return (
//     <nav id="menu" style={{backgroundColor:"#fffa"}} className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             {" "}
//             <span className="sr-only">Toggle navigation</span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//             <span className="icon-bar"></span>{" "}
//           </button>
//           {// <a className="navbar-brand page-scroll" href="#page-top">
//           //   {//<span style={{color:'gold'}}>KR Enterprises</span>
//           //     }
//           //     KR 
//           // </a>{" "}
//           }
//           <a className="navbar-brand page-scroll" href="#page-top">
//           <img src={myImg} width='70%' style={{borderRadius:"10px",borderWidth:'2px',borderColor:'none'}} />
//           </a>
//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="/" className="page-scroll">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/about-us" className="page-scroll">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="/industries-we-serve" className="page-scroll">
//                 Industries We Serve
//               </a>
//             </li>
//             <li>
//             <a href="/why-choose-us" className="page-scroll">
//                 Why Choose Us
//             </a>
//             </li>
//             <li>
//               <a href="/testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//             <a href="/#contact" className="page-scroll">
//                 Contact Us
//             </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navigation;









// import React from "react";
// import myImg from "../images/kr-logo1.png";
// import './Navigation.css';  // Ensure to create this CSS file and import it

// export const Navigation = (props) => {
//   return (
//     <nav id="menu" style={{ backgroundColor: "#fff7" }} className="navbar navbar-default navbar-fixed-top">
//       <div className="container">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle collapsed"
//             data-toggle="collapse"
//             data-target="#bs-example-navbar-collapse-1"
//           >
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <a className="navbar-brand page-scroll" href="#page-top">
//             <img
//               src={myImg}
//               alt="KR Enterprises"
//               className="navbar-logo"
//             />
//           </a>
//         </div>

//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul  className="nav navbar-nav navbar-right">
//             <li>
//               <a  href="/" className="page-scroll">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a  href="/about-us" className="page-scroll">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a  href="/services" className="page-scroll">
//                 Services
//               </a>
//             </li>
//             {// <li>
//             //   <a href="/industries-we-serve" className="page-scroll">
//             //     Industries We Serve
//             //   </a>
//             // </li>
//             }
//             <li>
//               <a  href="/why-choose-us" className="page-scroll">
//                 Why Choose Us
//               </a>
//             </li>
//             <li>
//               <a  href="/testimonials" className="page-scroll">
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a  href="/contact" className="page-scroll">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
  








import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import myImg from "../images/kr-logo1.png";
import './Navigation.css';  // Ensure to create this CSS file and import it

export const Navigation = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <nav id="menu" style={{ backgroundColor: "#fff" }} className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={myImg}
              alt="KR Enterprises"
              className="navbar-logo"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className={activePath === "/" ? "active" : ""}>
              <NavLink to="/" className="page-scroll">
                Home
              </NavLink>
            </li>
            <li className={activePath === "/about" ? "active" : ""}>
              <NavLink to="/about" className="page-scroll">
                About Us
              </NavLink>
            </li>
            <li className={activePath === "/services" ? "active" : ""}>
              <NavLink to="/services" className="page-scroll">
                Services
              </NavLink>
            </li>
            <li className={activePath === "/industries-we-serve" ? "active" : ""}>
              <NavLink to="/industries-we-serve" className="page-scroll">
                Industries &nbsp; We &nbsp; Serve
              </NavLink>
            </li>
            <li className={activePath === "/testimonials" ? "active" : ""}>
              <NavLink to="/testimonials" className="page-scroll">
                Testimonials
              </NavLink>
            </li>
            <li className={activePath === "/contact" ? "active" : ""}>
              <NavLink to="/contact" className="page-scroll">
                <a className="contact-button" >Contact Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
