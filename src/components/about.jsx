import React from "react";

const About = () => {
  // const team = [
  //   {
  //     name: "Dr. Anshuraj Das",
  //     title: "BDS - Dr. D Y Patil Vidyapeeth, Pune, MDS - Rajiv Gandhi University of Health Sciences",
  //     photo: dranshrajImg,
  //     description: "Over the years, Dr. Anshuraj Das has built a reputation for providing exceptional dental care, combining extensive clinical expertise with a deep commitment to patient well-being.",
  //   },
  //   {
  //     name: "Dr. Aditya Behki",
  //     title: "Dental Surgeon, PGIMS Rohtak",
  //     photo: drAdi,
  //     description:
  //       "Dr. Aditya Behki is a skilled dental professional with extensive clinical practice. He is committed to providing exceptional patient care and ensuring optimal oral health. His dedication to continuous learning drives his passion for advancing dental practices.",
  //   },
  // ];

  return (
    <div
      style={{
        padding: "3rem 2rem",
        backgroundColor: "#f4f8f9", // Light cyan background color
        fontFamily: "Arial, sans-serif",
      }}
    >
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
        About The Doctors
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

      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#555",
          marginBottom: "5rem",
        }}
      >
       

Welcome to HighStreet Dental Clinic, Noida's premier destination for world-class dental care. Our team consists of the region's finest dental surgeons, with MDS specialists in every major field of dentistry, including Orthodontics, Endodontics, Periodontics, Prosthodontics, Oral & Maxillofacial Surgery, Pedodontics, and Oral Pathology. We pride ourselves on delivering a full spectrum of dental services, from preventive care to complex restorative and cosmetic procedures. Equipped with state-of-the-art technology and driven by a passion for excellence, we are committed to providing personalized treatment in a warm, patient-centric environment. At HighStreet Dental Clinic, your healthiest, most confident smile is our priority!
      </p>

      
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Our clinic is equipped with state-of-the-art technology to ensure your
        comfort and satisfaction.
      </p>
    </div>
  );
};

export default About;
