import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'; // Import the CSS file
import reportWebVitals from './cmp/reportWebVitals';
import UserForm from './cmp/UserForm';
import LandingPage from './cmp/LandingPage';
import SignIn from './cmp/SignIn';
import SignUp from './cmp/SignUp';
import App from './cmp/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/add-user" element={<UserForm />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals(console.log);
