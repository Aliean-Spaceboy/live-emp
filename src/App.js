import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      {/* HashRouter should wrap the entire routing structure */}
      <Router >
        <HeaderComponent />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
          </Routes>
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
