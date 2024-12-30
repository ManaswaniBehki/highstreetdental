import React from "react";

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
        }}
      >
        <h2 style={{ margin: 0, fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
          HighStreet Dental Clinic
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
