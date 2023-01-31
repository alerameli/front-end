import React from "react";

function menu() {
  const menuSection = [
    { name: "skills" },
    { name: "education" },
    { name: "jobs" },
    { name: "courses" },
    { name: "projects" },
    { name: "contact" },
  ];
  return (
    <nav className="navbar navbar-expand-lg  menu">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" navbar-nav ms-auto">
            {menuSection.map((section, key) => (
              <li className="nav-item" key={key}>
                <a className="nav-link" aria-current="page" href={"#"+section.name}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default menu;
