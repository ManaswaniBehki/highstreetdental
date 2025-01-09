import React from "react";
import logoo from "../components/logoo.png";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "cadetblue",
        color: "#fff",
        padding: "1rem 2rem",
        position: "fixed",
        width: "100%",
        zIndex: "10",
        boxShadow: "0 4px 6px rgba(189, 195, 199, 1)",
        borderBottom: "3px solid rgba(189, 195, 199, 1)",
        borderRadius: "0 0 10px 10px",
        top: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // Allows wrapping for smaller devices
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flex: 1, // Ensures logo and title adapt to the available space
            minWidth: "200px", // Prevents elements from squishing too much
          }}
        >
          <img
            src={logoo}
            alt="Logo"
            style={{
              width: "40px", // Adjusted size for better responsiveness
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <h2
            style={{
              margin: 0,
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "1.2rem", // Resizes text for smaller screens
            }}
          >
            HighStreet Dental Clinic
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
