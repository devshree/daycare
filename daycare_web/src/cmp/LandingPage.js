import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import '../styles/styles.css';
import '../styles/index.css'; 
import bannImg from '../media/plant.jpg';
import Layout from './Layout';

const LandingPage = () => {
  return (
    <Layout> 
      <div className="landing-page">
        <div className="banner">
          <h1 className="landing-page-title">Nurture</h1>
          <img src={bannImg} className="banner-image" alt="bannImg" />
        </div>
        <div className="cta-buttons">
          <Link to="/add-user" className="cta-button">Add User</Link>
          <Link to="/signin" className="cta-button">Sign In</Link>        
          <Link to="/signup" className="cta-button">Sign Up</Link>
          <Link to="/app" className="cta-button">App</Link>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
