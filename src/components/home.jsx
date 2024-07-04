import React from "react";

export const Home = (props) => {
  return (
    <div style={{backgroundColor:"#f9f4ec",paddingTop:30}} id="features" className="text-center">
      <div  className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Welcome</h2>
          <h3 style={{display:'block',paddingTop:10,textAlign:'center'}} >Welcome to K.R. Group Your trusted partner in international recruitment. We specialize in connecting top talent with leading organizations worldwide. Our expertise in overseas placement enables us to provide tailored solutions for both job seekers and employers.</h3>
          <h3 style={{display:'block',paddingTop:10,textAlign:'center'}} >We believe in this principle :</h3>
          <h3 style={{display:'block',fontSize:19,paddingTop:10,textAlign:'center',fontWeight:'bold'}} >“Do good to others, and goodness will come back to you.” –  Prophet Muhammad (peace be upon him)</h3>
        </div>
       {/*<div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>*/}
      </div>
    </div>
    
  );
};
export default Home;


