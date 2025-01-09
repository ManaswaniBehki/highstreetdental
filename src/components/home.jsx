import React, { useState } from "react";
import SendMail from "./sendmail";
import clinicBackground from "../components/bg.jpg"; // Update path.
import "./Home.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false); // Track the form visibility

  const toggleForm = () => setShowForm(!showForm); // Toggles the form visibility

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${clinicBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "0 20px",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <div style={{ zIndex: 2 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to HighStreet Dental Clinic
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
          We are dedicated to providing exceptional dental care in a warm and friendly environment.
          At Highstreet Dental Clinic, your oral health is our priority, and we are committed to making every visit a positive experience for you and your family.
        </p>

        <button
          style={{
            backgroundColor: "#7aa1bf",
            color: "#fff",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1.2rem",
            transition: "background-color 0.3s ease",
            position: "relative",
          }}
          onClick={toggleForm}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Book an Appointment
        </button>

        {showForm && (
          <div style={{ marginTop: "1rem", position: "relative" }}>
            <SendMail toggleForm={toggleForm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
