// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <br />
      <Card />
      <br />
      <Counter />
      <br />
      <Footer />
    </div>
  );
}

export default App;
