import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the Kaaba icon
import { faKaaba } from '@fortawesome/free-solid-svg-icons';
export const Home2 = (props) => {
  return (
    <div style={{paddingTop:10}} id="features2" className="text-center">
      <div  className="container">

       <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div  key={`${d.title}-${i}`} style={{paddingLeft:100}}  className="col-xs-6 col-md-2">
                  {" "}
                  <i   area-hidden='true' className={d.icon} ></i>
                  <h3 style={{width:'70%',display:'block',textAlign:'center',padding:'20px 0px',color:'#fff'}} >{d.title}</h3>
                  {// <p style={{display:'block',textAlign:'justify'}}>{d.text}</p>
                  }
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>

  );
};
export default Home2;


