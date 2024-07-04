import React from "react";

export const Services = (props) => {
  return (
    <div id="services"  >
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Services</h2>
        </div>
        <div  style={{paddingLeft:36}} className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <img style={{borderBottomRightRadius:15,borderBottomLeftRadius:30}} src={d.img} width={500} height={300} />
                  <div className="service-desc">
                    <h3 style={{fontSize:30}}>{d.name}</h3>
                    <p style={{fontSize:20}}>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
export default Services;
