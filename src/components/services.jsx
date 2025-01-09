import React from 'react';
import './services.css';  // Make sure to import the CSS file
import tw from '../components/teeth-whitening.jpeg';
import sd from '../components/smilrdesignnew.jpg';
import dimp from '../components/dimp.webp';
import df from '../components/df.jpg';
import tpol from '../components/tpol.jpg';
import rct from '../components/rct.jpg';
import dcv from '../components/dcv.jpg';
import dent from '../components/dent.webp';
import invb from '../components/invb.jpg';

const services = [
  { name: 'Teeth Whitening', description: 'Enhance the brightness of your smile with our safe and effective teeth whitening treatments, designed to remove stains and restore your natural shine. Achieve a confident, radiant smile in no time.', bgimg: tw },
  { name: 'Smile Designing', description: 'Craft the perfect smile with our personalized smile design solutions, blending artistry and advanced dental technology for a naturally beautiful outcome. Every detail is customized to match your facial features and personality.', bgimg: sd },
  { name: 'Dental Implants', description: 'Rebuild your smile with durable and long-lasting dental implants that restore missing teeth with a natural appearance and function. Our precision techniques ensure a comfortable and secure solution.', bgimg: dimp },
  { name: 'Dental Fillings', description: 'Restore the health and beauty of your teeth with high-quality dental fillings that seamlessly blend with your natural tooth color. Our expert treatments prevent further damage while enhancing your smile.', bgimg: df },
  { name: 'Teeth Cleaning & Polishing', description: 'Keep your teeth fresh and healthy with our professional cleaning and polishing services, designed to remove plaque and tartar buildup. Achieve a sparkling smile with our gentle, thorough care.', bgimg: tpol },
  { name: 'Root Canal Treatment', description: 'Save your natural teeth with our pain-free root canal treatments, offering a long-term solution to infected or damaged teeth. We prioritize comfort and care to restore the function of your smile.', bgimg: rct },
  { name: 'Dental Crowns', description: 'Revitalize your smile with custom dental crowns and veneers that restore the strength, shape, and appearance of damaged teeth. Enjoy a natural-looking, flawless smile with our advanced options.', bgimg: dcv },
  { name: 'Dentures', description: 'Restore full function and aesthetics with our custom dentures, designed for comfort and natural-looking results. Our high-quality dentures help you smile with confidence and improve your ability to eat and speak.', bgimg: dent },
  { name: 'Invisible Braces', description: 'Achieve a straighter smile discreetly with our invisible braces, designed to straighten teeth without the use of traditional metal brackets. Comfortable and effective, these braces fit your lifestyle seamlessly.', bgimg: invb },
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
      <h2
        style={{
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
          color: "#2c3e50",
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          position: "relative",
        }}
      >
        Treatments Available
        <span
          style={{
            display: "block",
            width: "150px",
            height: "4px",
            background: "linear-gradient(90deg,#16a085, #1abc9c)",
            margin: "0.5rem auto",
            borderRadius: "2px",
          }}
        ></span>
      </h2>

        <p>We offer a wide range of dental services to enhance your smile and maintain your oral health. From whitening to advanced treatments, we are here to provide the best care for you.</p>
      </div>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div 
              className="card-content" 
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",  // Changed to vertical layout
                justifyContent: "flex-start",  // Ensures that image is at the top
                alignItems: "center",
                position: "relative",
                padding: "20px",  // Adjust padding for better spacing
              }}
            >
              <div 
                className="image"
                style={{
                  backgroundImage: `url(${service.bgimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "200px",  // Set a fixed height for the image
                  borderRadius:"9px"
                }}
              ></div>
              <div className="text" style={{ marginTop: "20px" }}> {/* Adds space between image and text */}
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
