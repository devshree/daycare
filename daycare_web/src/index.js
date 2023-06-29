import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Form';
import reportWebVitals from './reportWebVitals';
import Form from "./Form";
// import ReactDOM from "react-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);
//
// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
