import React from "react";

import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <nav
        className="navbar bg-primary"
        data-bs-theme="dark"
        style={{
          width: "100%",
          borderRadius: "25px",
        }}
      >
        <h1 style={{ color: "black", textAlign: "center" }}>
          Employee Management Software
        </h1>
      </nav>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add Employee</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
