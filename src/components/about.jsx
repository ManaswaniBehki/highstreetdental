import React from "react";
import dranshrajImg from "../components/dranshraj.jpeg";
import drAdi from "../components/adi.jpg";

const About = () => {
  const team = [
    {
      name: "Dr. Anshuraj Das",
      title: "BDS - Dr. D Y Patil Vidyapeeth, Pune, MDS - Rajiv Gandhi University of Health Sciences",
      photo: dranshrajImg, 
      description: "He has been a practicing dentist for 19 years.",
    },
    {
      name: "Dr. Aditya Behki",
      title: "BDS, Sudha Rustagi College of Dental Science and Research",
      photo: drAdi,  
      description: "Believes that confidence comes through our smiles.",
    }
    
  ];

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#9dcfcf", // Light cyan background color
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#f7fcfc",
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          position: "relative",
        }}
      >
        About The Doctors
        <span
          style={{
            display: "block",
            width: "150px",
            height: "4px",
            background: "linear-gradient(90deg,rgb(31, 63, 57), #1abc9c)",
            margin: "0.5rem auto",
            borderRadius: "2px",
          }}
        ></span>
      </h2>

      <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#555" }}>
        At HighStreet Dental Clinic, we are committed to providing the best dental care. Meet our skilled team of dentists:
      </p>

      <div style={{ marginTop: "3rem" }}>
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "2rem 0",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse", // Alternate left-right positioning
              gap: "2rem",
            }}
          >
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div>
              <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "0.5rem" }}>
                {member.name}
              </h3>
              <p style={{ fontSize: "1rem", color: "#777", marginBottom: "0.5rem" }}>
                {member.title}
              </p>
              <p style={{ fontSize: "1rem", color: "#555" }}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Our clinic is equipped with state-of-the-art technology to ensure your comfort and satisfaction.
      </p>
    </div>
  );
};

export default About;
