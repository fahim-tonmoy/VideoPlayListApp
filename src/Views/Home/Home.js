import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return (
    <HomeStyled>
      <h1 className="Home__title">Welcome to the Crush Course List</h1>
      <div className="courses">
        <Link to="/reactjs">
          <div className="course__title">
            <h1>React Js</h1>
          </div>
        </Link>
        <Link to="/nodejs">
          <div className="course__title">
            <h1>Node Js</h1>
          </div>
        </Link>
        <Link to="/tailwindcss">
          <div className="course__title">
            <h1>Tailwind Css</h1>
          </div>
        </Link>
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  .Home__title {
    text-align: center;
    font-size: 3rem;
  }
  .courses {
    display: flex;
    justify-content: space-around;
    a {
      cursor: pointer;
      text-decoration: none ;
      .course__title {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dcdbdb66;
        width: 300px;
        height: 100px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.25); 
      }
      .course__title:hover {
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.95);
      }
  }

`;

export default Home;
