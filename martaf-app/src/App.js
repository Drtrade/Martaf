// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

const Home = () => (
  <div>
    <h1>Your E-commerce App</h1>
    <p>Welcome to our platform!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegistrationForm/>} />
      </Routes>
    </Router>
  );
};

export default App;