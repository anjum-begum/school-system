import React from "react";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand mr-40 fw-bold d-flex align-items-center" href="#">
          <img src="https://www.shutterstock.com/shutterstock/photos/2430387275/display_1500/stock-vector-it-is-an-academy-logo-for-school-collage-university-or-private-coaching-center-2430387275.jpg" width="40" height="40" className="me-2" />
            Olifant School
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className ="ms-auto" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#admission">Admission</a></li>
          <li className="nav-item"><a className="nav-link" href="#faculty">Faculty</a></li>
          <li className="nav-item"><a className="nav-link" href="#vision">Vision</a></li>
          <li className="nav-item"><a className="nav-link" href="#subjects">Subjects</a></li>
        </ul>
      </div>
    </nav >
  );
}

export default Navbar;
