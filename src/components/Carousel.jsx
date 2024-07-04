// import React, { useState, useEffect } from 'react';

// const Carousel = () => {
//   const images = [
//     'img/about/c1.jpg', // Replace with your image URLs
//     'img/about/c2.jpg',
//     'img/about/c3.jpg',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   return (
//     <div style={{}} style={styles.carouselContainer}>
//       <img src={images[currentIndex]} alt="carousel" style={styles.image} />
//     </div>
//   );
// };

// const styles = {
//   carouselContainer: {
//     width: '100%',
//     opc
//     opacity:'0.2',
//     height: '100%', // Set the height you want for your carousel
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'opacity 1s ease-in-out',
//   },
// };

// export default Carousel;
// import React, { useState, useEffect } from 'react';
// import './cImg.css'
// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     {
//       src: 'img.about/c1.jpg',
//       caption: 'Caption 1',
//       paragraph: 'This is the first image description.',
//     },
//     {
//       src: 'img/about/c2.jpg',
//       caption: 'Caption 2',
//       paragraph: 'This is the second image description.',
//     },
//     {
//       src: 'img/about/c3.jpg',
//       caption: 'Caption 3',
//       paragraph: 'This is the third image description.',
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [images.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-inner">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${image.src})` }}
//           >
//             <div className="carousel-caption">
//               <h3>{image.caption}</h3>
//               <p>{image.paragraph}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-control-prev" onClick={handlePrev}>
//         ‹
//       </button>
//       <button className="carousel-control-next" onClick={handleNext}>
//         ›
//       </button>
//     </div>
//   );
// };

// export default Carousel;
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: 'img/intro-bg2.jpg',
      caption: 'Caption 1',
      paragraph: 'This is the first image description.',
    },
    {
      src: 'img/about/c1.jpg',
      caption: 'Caption 2',
      paragraph: 'This is the second image description.',
    },
    {
      src: 'img/about/c3.jpg',
      caption: 'Caption 3',
      paragraph: 'This is the third image description.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img  src={image.src} alt={image.caption} />
            <div className="carousel-caption d-none d-md-block">
          </div>
            <div className="carousel-caption">
              <h3>{image.caption}</h3>
              <p>{image.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={handlePrev}>
        ‹
      </button>
      <button className="carousel-control-next" onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
