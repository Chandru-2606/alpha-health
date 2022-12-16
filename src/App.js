import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './Components/Login/login';
import SignUp from './Components/SignUp/signUp';
import Admin from './Components/AdminDashboard/admin';
import UserDashBoard from './Components/UserDashBoard/userDashBoard';
import Doctor from './Components/DoctorDashBoard/doctor';
import EditDoctor from './Components/AdminDashboard/EditDoctors';
import AddDoctors from './Components/AdminDashboard/AddDoctor';
import EditPatients from './Components/UserDashBoard/Editpatients';
import AddAppoinment from './Components/UserDashBoard/AddAppoinment';
import EditAppoinment from './Components/UserDashBoard/EditAppoinment';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path={`/Admin/:role/`} element={<Admin />} />
      <Route path={`/UserDashBoard/:id/:role/`} element={<UserDashBoard />} />
      <Route path={`/Doctor/:id/:role/`} element={<Doctor />} />
      <Route path={`/EditDoctor/:id/:role/`} element={<EditDoctor />} />
      <Route path="/AddDoctors" element={<AddDoctors />} />
      <Route path={`/EditPatients/:id/:role`} element={<EditPatients />} />
      <Route path="/AddAppoinment/:id/:role" element={<AddAppoinment />} />
      <Route path="/EditAppoinment/:id/:role" element={<EditAppoinment />} />





    </Routes>
  </Router>
  );
}

export default App;
