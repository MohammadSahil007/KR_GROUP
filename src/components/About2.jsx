import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
    <div style={{marginTop:100}} className="section-title text-center">
      <h2 > About Us</h2>
    </div>
    <div>
     <h2 style={{display:'block',textAlign:'left',paddingLeft:40,}}></h2>
    </div>
      <div className="section">
      <img  src="img/about/kr2.png" alt="Our Founder" />
        <div className="section-content">
        <h2>Our Founder - <spans style={{color:'gold'}} >Khairulla Rafiulla Ansari (aka KR)</spans> </h2>
        <p>
        Khairulla Rafiulla Ansari , the visionary founder of KR Group, established the company with a mission to bridge the talent gap across borders. With over two decades of experience in international recruitment and talent management, Khairulla Ansari has been a driving force in connecting businesses with top-tier professionals worldwide. His deep understanding of the global job market, coupled with a passion for helping individuals find their dream careers, has positioned KR Group as a leader in the recruitment industry.          </p>
        </div>
        </div>
        
      <div className="section">
        <img src="img/about/fk.png" alt="Our CEO" />
        <div className="section-content">
          <h2>Our CFO- <spans style={{color:'gold'}} >Mohammad Farooque Khairulla Ansari (aka KR)</spans> </h2>
          <p>
          As the CFO of KR Group, Mohammad Farooque Ansari brings a wealth of experience and a visionary approach to the international recruitment industry. With a passion for connecting talent with the right opportunities, Nasim has been instrumental in driving the company's growth and success.
          </p>  
        </div>
      </div>

      <div className="section">
      <img src="img/about/ak.png" alt="Our CFO" />
        <div className="section-content">
          <h2>Our CEO of India Recruitment Handler - <spans style={{color:'gold'}} >Mohammad Ayub Khairulla Ansari (aka KR)</spans> </h2>

          <p>
          Mohammad Ayub Khairulla Ansari is the Chief Financial Officer (CFO) of KR Group. With a distinguished career in finance and international recruitment, Ayub brings a wealth of expertise and a strategic vision to our company. His leadership and dedication have been instrumental in driving KR Group' growth and success.
          </p>
        </div>
      </div>
      <div className="section">
      <img src="img/about/w2.png" alt="Our CFO" />
        <div className="section-content">
          <h2>Our Import & Export Company Handler- <spans style={{color:'gold'}} >Mohammad Wasim Khairulla Ansari</spans> </h2>

          <p>
          Mohammad Wasim Khairulla Ansari is the Chief Financial Officer (CFO) of KR Group. With a distinguished career in finance and international recruitment, Ayub brings a wealth of expertise and a strategic vision to our company. His leadership and dedication have been instrumental in driving KR Group' growth and success.
          </p>
        </div>
      </div>
      <div className="section">
      <img src="img/about/nasim.png" alt="Our CFO" />
        <div className="section-content">
          <h2>Our CEO of Saudi Recruitment - <spans style={{color:'gold'}} >Mohammad Nasim Khairulla Ansari</spans> </h2>

          <p>
          Mohammad Nasim Khairulla Ansari is the Chief Financial Officer (CFO) of KR Group. With a distinguished career in finance and international recruitment, Ayub brings a wealth of expertise and a strategic vision to our company. His leadership and dedication have been instrumental in driving KR Group' growth and success.
          </p>
        </div>
      </div>
      <div className="section">
      <img src="img/about/ayub.png" alt="Our CFO" />
        <div className="section-content">
          <h2>Our Hajj & Umrah Manager - <spans style={{color:'gold'}} >Mohammad Shadab Khairulla Ansari (aka KR)</spans> </h2>

          <p>
          Mohammad Shadab Khairulla Ansari is the Chief Financial Officer (CFO) of KR Group. With a distinguished career in finance and international recruitment, Ayub brings a wealth of expertise and a strategic vision to our company. His leadership and dedication have been instrumental in driving KR Group' growth and success.
          </p>
        </div>
      </div>
      <div className="section2">
      {// <img width={700} height={300} style={{border:'2px solid gold', }} src="img/about/Story.jpg" alt="Our Story" />
      }
      <div  className="section-content-2">
          <h2 style={{display:'block',paddingTop:50,textAlign:'center'}}>Our Story </h2>

          <p style={{display:'block',fontSize:19,textAlign:'center'}}>
          Nestled in the heart of our town, KR Group is more than just an international recruitment company; it's a celebration of our community's vibrant spirit. We take pride in connecting talent across borders, reflecting the rich tapestry of our global culture. Every placement we make is a labor of love, a blend of tradition and innovation, and a commitment to the people who trust us with their careers. At KR Group, we're more than recruiters; we're storytellers, weaving the essence of our town into every connection.
          </p>
        </div>
      </div>
      <div className="section2">
      {// <img width={700} height={300} style={{border:'2px solid gold', }} src="img/about/Story.jpg" alt="Our Story" />
      }
      <div  className="section-content-2">
          <h2 style={{display:'block',paddingTop:50,textAlign:'center'}}>Our Mission </h2>

          <p style={{display:'block',fontSize:19,textAlign:'center'}}>
          At KR Group, our mission is clear to bridge the gap between exceptional talent and outstanding opportunities worldwide. We're committed to using our extensive network and deep industry knowledge to create a platform where the best talent meets the best opportunities. Beyond our passion for recruitment, we aim to be a welcoming hub for professionals, creating a space for growth, connection, and success. Our mission is to share the joy of career building, one successful placement at a time, as we celebrate the incredible individuals who make this possible.
          </p>
        </div>
      </div>
      <div className="section2">
      {// <img width={700} height={300} style={{border:'2px solid gold', }} src="img/about/Story.jpg" alt="Our Story" />
      }
      <div  className="section-content-2">
          <h2 style={{display:'block',paddingTop:50,textAlign:'center'}}>Our Philosophy </h2>

          <p style={{display:'block',fontSize:19,textAlign:'center',paddingBottom:50}}>
          At KR Group, our philosophy is rooted in trust, integrity, and excellence. We believe in the power of global talent and the positive impact it can have on businesses and communities. Our commitment is to connect people with opportunities that allow them to thrive, using the finest practices and time-honored techniques to ensure the best matches. We strive to build a community around our services, where every placement is a testament to our dedication and passion for helping individuals and organizations succeed.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
