import React from "react";

export const Home = (props) => {
  return (
    <div style={{backgroundColor:"#f7f4dc",paddingTop:30}} id="features" className="text-center">
      <div  className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why Choose us?</h2>
        </div>
       <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-2">
                  {" "}
                  <i  area-hidden='true' className={d.icon}></i>
                  <h3 style={{padding:'20px 0px'}} >{d.title}</h3>
                  <p style={{display:'block',textAlign:'justify',paddingBottom:100}}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>

  );
};
export default Home;


