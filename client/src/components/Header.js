import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = ({ setCurrentId }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <span className="icon">TheITStudio</span>
      <button
        className="add-btn"
        onClick={() => {
          setCurrentId(null);
          navigate("/form");
        }}
      >
        <p>&#x2795; Add</p>
      </button>
    </div>
  );
};

export default Header;
