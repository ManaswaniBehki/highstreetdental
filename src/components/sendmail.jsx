// import React, { useState } from "react";

// const SendMail = ({ toggleForm }) => {
//   const [userNumber, setUserNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userNumber || !message) {
//       setStatus("Please fill in both fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/send-appointment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           phone_number: userNumber,
//           message: message,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setStatus(result.message);
//       } else {
//         setStatus(result.message);
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//       setStatus("Failed to send request. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "15%", // Adjust vertical placement
//         left: "50%",
//         transform: "translate(-50%, -15%)",
//         padding: "1rem",
//         maxWidth: "400px",
//         width: "90%",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//         zIndex: 1000,
//       }}
//     >
//       <button
//         onClick={toggleForm} // Call the toggleForm to hide the form
//         style={{
//           position: "absolute",
//           top: "5px",
//           right: "10px",
//           backgroundColor: "transparent",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "1.2rem",
//           color: "#888",
//         }}
//       >
//         &times;
//       </button>
//       <h3 style={{ color: "#c3d8db", marginBottom: "1.5rem" }}>
//         Book an Appointment
//       </h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Phone Number"
//           value={userNumber}
//           onChange={(e) => setUserNumber(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "0.75rem",
//             margin: "0.5rem 0",
//             border: "1px solid #ddd",
//             borderRadius: "50px",
//             outline: "none",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//         <textarea
//           placeholder="Your Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           style={{
//             width: "100%",
//             padding: "0.75rem",
//             margin: "0.5rem 0",
//             border: "1px solid #ddd",
//             borderRadius: "20px",
//             outline: "none",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//             resize: "none",
//           }}
//           rows={4}
//         />
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#4caf50",
//             color: "#fff",
//             padding: "0.75rem 1.5rem",
//             border: "none",
//             borderRadius: "50px",
//             cursor: "pointer",
//             fontWeight: "bold",
//             fontSize: "1rem",
//             marginTop: "1rem",
//             transition: "background-color 0.3s",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
//         >
//           Send Request
//         </button>
//       </form>

//       {status && (
//         <div
//           style={{
//             marginTop: "1rem",
//             padding: "1rem",
//             backgroundColor: status.includes("Success")
//               ? "#d4edda"
//               : "#f8d7da",
//             color: status.includes("Success") ? "#155724" : "#721c24",
//             borderRadius: "20px",
//             boxShadow: "0 2px 4px rgba(161, 46, 46, 0.1)",
//           }}
//         >
//           {status}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SendMail;

import React, { useState } from "react";
import emailjs from "emailjs-com";

const SendMail = ({ toggleForm }) => {
  const [userNumber, setUserNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!userNumber || !message) {
      setStatus("Please fill in both fields.");
      return;
    }

    // EmailJS configuration
    const templateParams = {
      phone_number: userNumber,
      message: message,
    };

    // Send email via EmailJS
    emailjs
      .send("service_c91v575", "template_w6pkma7", templateParams, "riKeViMO7y7_rLc3w") // Replace with your service ID, template ID, and user API key
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setStatus("Appointment request sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "15%", // Adjust vertical placement
        left: "50%",
        transform: "translate(-50%, -15%)",
        padding: "1rem",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={toggleForm} // Call the toggleForm to hide the form
        style={{
          position: "absolute",
          top: "5px",
          right: "10px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          color: "#888",
        }}
      >
        &times;
      </button>
      <h3 style={{ color: "#c3d8db", marginBottom: "1.5rem" }}>Book an Appointment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            margin: "0.5rem 0",
            border: "1px solid #ddd",
            borderRadius: "50px",
            outline: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            margin: "0.5rem 0",
            border: "1px solid #ddd",
            borderRadius: "20px",
            outline: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            resize: "none",
          }}
          rows={4}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            marginTop: "1rem",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Send Request
        </button>
      </form>

      {status && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: status.includes("Success")
              ? "#d4edda"
              : "#f8d7da",
            color: status.includes("Success") ? "#155724" : "#721c24",
            borderRadius: "20px",
            boxShadow: "0 2px 4px rgba(161, 46, 46, 0.1)",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default SendMail;
