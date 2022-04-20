import { Link } from "react-router-dom";
import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>React Js Video Player</h1>
      <Link to="/reactjs">
        <h1>React Js</h1>
      </Link>
      <Link to="/nodejs">
        <h1>Node Js</h1>
      </Link>
    </div>
  );
};

export default Home;
