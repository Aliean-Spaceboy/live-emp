import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:9090/api/v1/employees";

class EmployeeService {
  // Fetch all employees
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL).catch(this.handleError);
  }

  // Create a new employee
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee).catch(this.handleError);
  }

  // Fetch a single employee by ID
  getEmployeeById(employeeId) {
    return axios
      .get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`)
      .catch(this.handleError);
  }

  // Update an existing employee
  updateEmployee(employeeId, employee) {
    return axios
      .put(`${EMPLOYEE_API_BASE_URL}/${employeeId}`, employee)
      .catch(this.handleError);
  }

  // Delete an employee by ID
  deleteEmployee(employeeId) {
    return axios
      .delete(`${EMPLOYEE_API_BASE_URL}/${employeeId}`)
      .catch(this.handleError);
  }

  // Handle errors (Optional)
  handleError(error) {
    console.error("API call failed. Error: ", error.response || error.message);
    return Promise.reject(error);
  }
}

export default new EmployeeService();
