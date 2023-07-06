// Layout.js

import React from 'react';
import '../styles/Layout.css'; // Import the CSS file

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
}

export default Layout;
