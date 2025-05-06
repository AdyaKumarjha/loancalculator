import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h1>Something went wrong in the application.</h1>
      <button
        onClick={goToDashboard}
        style={{
          padding: "12px 17px",
          color: "blue", 
          fontSize: "16px",
          border: "1px solid #1d4ed8",
          borderRadius: "4px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
