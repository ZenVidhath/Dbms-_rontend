import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CustomCarousel = () => {
  // Motion animation variants
  const carouselVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <motion.div
        variants={carouselVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        <Carousel style={{ width: '100%', height: '380px', marginTop: '-40px' }}>
          <Carousel.Item>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '358px',
                overflow: 'hidden',
              }}
            >
              <img
                className="d-block w-100"
                src="/images/slide1.jpg"
                alt="First slide"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: '0.8', // Reduced opacity
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(108, 92, 231, 0.8)', // Purple tint with 50% transparency
                  mixBlendMode: 'multiply', // Blend the overlay with the image
                }}
              ></div>
            </div>
            <Carousel.Caption>
              <h3 className="text-4xl font-bold mb-3 text-white">
                Empowering the Future of Every Child
              </h3>
              <p className="text-lg font-semibold text-white opacity-90">
                Join us in building a brighter, safer world where every child has the opportunity to thrive. Together, we can make an impact!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '358px',
                overflow: 'hidden',
              }}
            >
              <img
                className="d-block w-100"
                src="/images/slide2.webp"
                alt="Second slide"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: '0.8', // Reduced opacity
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(108, 92, 231, 0.8)', // Purple tint with 50% transparency
                  mixBlendMode: 'multiply', // Blend the overlay with the image
                }}
              ></div>
            </div>
            <Carousel.Caption>
              <h3 className="text-4xl font-bold mb-3 text-white">
                Bringing Smiles to Communities
              </h3>
              <p className="text-lg font-semibold text-white opacity-90">
                We believe that together, we can bring smiles to the faces of children everywhere. Our vision is to empower communities for a better tomorrow.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '358px',
                overflow: 'hidden',
              }}
            >
              <img
                className="d-block w-100"
                src="/images/slide3.jpg"
                alt="Third slide"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: '0.8', // Reduced opacity
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(108, 92, 231, 0.8)', // Purple tint with 50% transparency
                  mixBlendMode: 'multiply', // Blend the overlay with the image
                }}
              ></div>
            </div>
            <Carousel.Caption>
              <h3 className="text-4xl font-bold mb-3 text-white">
                Join the Movement
              </h3>
              <p className="text-lg font-semibold text-white opacity-90">
                Be a part of something bigger. Together, we can make the world a better place for children, one step at a time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default CustomCarousel;
