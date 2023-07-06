import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import Layout from './Layout';

const SignIn = () => {
  return (
    <Layout>
      <div className="signin-page">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </Layout>
  );
};

export default SignIn;
