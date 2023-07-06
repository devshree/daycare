import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';
import Layout from './Layout';

const SignUp = () => {
  return (
    <Layout>
      <div className="signup-page">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </Layout>
  );
};

export default SignUp;
