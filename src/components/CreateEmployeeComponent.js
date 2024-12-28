import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployeeComponent() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Save new employee
  const saveHandler = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then(() => {
        navigate('/employees');
      })
      .catch((error) => {
        console.error('Error creating employee:', error);
      });
  };

  // Cancel action
  const cancelHandler = () => {
    navigate('/employees');
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Add Employee</h3>
          <div className="card-body">
            <form>
              {/* First Name Field */}
              <div className="form-group my-2">
                <label>First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  autoComplete="off"
                  className="form-control"
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name Field */}
              <div className="form-group my-2">
                <label>Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  autoComplete="off"
                  className="form-control"
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Email Field */}
              <div className="form-group my-2">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  className="form-control"
                  value={employee.email}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <button
                type="submit"
                className="btn btn-success"
                onClick={saveHandler}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={cancelHandler}
                style={{ marginLeft: '10px' }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
