import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              {/* Anchor with valid href and accessible role */}
              <a
                href="/"
                className="navbar-brand"
                role="link"
              >
                Employee Management Application
              </a>
              {/* Collapsible menu for better responsiveness */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/employees">
                      Employees
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/add-employee">
                      Add Employee
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
