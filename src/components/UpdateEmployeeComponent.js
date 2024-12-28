import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function UpdateEmployeeComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Fetch employee data by ID on component mount
  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((error) => {
          console.error('Error fetching employee:', error);
        });
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Save or Update Employee
  const saveOrUpdateHandler = (e) => {
    e.preventDefault();
    if (id) {
      // Update existing employee
      EmployeeService.updateEmployee(id, employee)
        .then(() => {
          navigate('/employees');
        })
        .catch((error) => {
          console.error('Error updating employee:', error);
        });
    } else {
      // Create new employee
      EmployeeService.createEmployee(employee)
        .then(() => {
          navigate('/employees');
        })
        .catch((error) => {
          console.error('Error creating employee:', error);
        });
    }
  };

  // Cancel and navigate back
  const cancelHandler = () => {
    navigate('/employees');
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">{id ? 'Update Employee' : 'Add Employee'}</h3>
          <div className="card-body">
            <form>
              {/* First Name Field */}
              <div className="form-group my-2">
                <label>First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
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
                  className="form-control"
                  value={employee.email}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <button
                type="button"
                className="btn btn-success"
                onClick={saveOrUpdateHandler}
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
