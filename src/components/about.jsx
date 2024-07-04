import React from "react";
import './Navigation.css'
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About KR</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {//<div className="col-lg-6 col-sm-6 col-xs-12">
                //   <ul>
                //     {props.data
                //       ? props.data.Why2.map((d, i) => (
                //           <li key={`${d}-${i}`}> {d}</li>
                //         ))
                //       : "loading"}
                //   </ul>
                // </div>
                      }

                </div>
                </div>
                </div>
                </div>
                </div>
                {/*<div class="col1">
                    <div class="qu">
                      <span>Rabbi Zidni 'Ilma. : ربِّ زِدْنِي عِلْماً - "My lord, increase me in knowledge" [20:119].</span>
                    </div>

                        {//<p style="color:#000;margin-left:180px;font-weight:500;font-size:16px;">"Read! In the Name of your Lord, Who has created (all that exists), He has created man from a clot (a piece of thick coagulated blood), Read! And your Lord is the Most Generous, Who has taught (the writing) by the pen. He has taught man that which he knew not."</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                        }

                 </div>
                 */}
                </div>
  );
};
export default About;


// <div className="disclaimer-container">
// <p className="disclaimer-text">
//   This is a scrolling disclaimer. Please read the terms and conditions carefully.
// </p>
// </div>

