import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Import Google Maps icon
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon
import { FaRegCopyright } from "react-icons/fa"; // Import Copyright icon


const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#34495e",
        color: "#fff",
        textAlign: "center",
        padding: "1rem 0",
      }}
    >
      <h2>Contact Us - 9818460347</h2>
      <p>Shop number 5, LGF, Ozone Apartment Rd, near Mithaas Sweets, Hazipur, Sector 104, Noida, Uttar Pradesh 201304.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/high.streetdental?igsh=MXg2ZWVhanVjMXpmMw=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            padding: "0.5rem",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
          }}
          className="footer-icon"
        >
          <FaInstagram />
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@Dr.Adityabehki"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            padding: "0.5rem",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
          }}
          className="footer-icon"
        >
          <FaYoutube />
        </a>
        {/* Google Maps */}
        <a
          href="https://g.co/kgs/4cc5SgW"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            padding: "0.5rem",
            borderRadius: "50%",
            transition: "background-color 0.3s ease",
          }}
          className="footer-icon"
        >
          <FaMapMarkerAlt />
        </a>
      </div>
      <style>
        {`
          .footer-icon:hover {
            background-color: black;
          }
        `}
      </style>
      <div style={{ marginTop: "1.5rem" }}>
  <FaRegCopyright style={{ marginRight: "5px" }} />
  <span>
    HighStreet Dental Clinic. All Rights Reserved. Contact us at{" "}
    <a
      href="mailto:adityabehki104@gmail.com"
      style={{
        color: "#fff",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      adityabehki104@gmail.com
    </a>
  </span>
</div>
    </footer>
  );
};

export default Footer;
