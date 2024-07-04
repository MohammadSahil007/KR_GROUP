import React from "react";
export const IndustriesWeServe = (props) => {
  return (
    <div id="services"  >
      <div className="container">
        <div className="section-title text-center">
          <h2>Industries we serve</h2>
        </div>
        <div style={{paddingLeft:36}} className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <img style={{borderRadius:10}} src={d.img} width={500} height={280} />
                  <div className="service-desc">
                    <span style ={{ fontFamily:'"Raleway",sans-serif',display:'block',fontSize:30,fontWeight:'bold', alignContent:'center', textAlign:'center'}}>{d.name}</span>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
export default IndustriesWeServe;
