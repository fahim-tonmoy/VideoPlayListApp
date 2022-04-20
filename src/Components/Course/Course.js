import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

import CourseContent from "./CourseContent";
import styled from "styled-components";

const Course = (props) => {
  const location = useLocation();
  const courseName = location.pathname.split("/")[1];
  const courses = {
    reactjs: [
      { title: "React Js Title 1", videoId: "36TUIIZgiu0" },
      { title: "React Js Title 2", videoId: "GY7E4Eurb0Q" },
      { title: "React Js Title 3", videoId: "36TUIIZgiu0" },
    ],
    nodejs: [
      { title: "Node Js Title 1", videoId: "36TUIIZgiu0" },
      { title: "Node Js Title 2", videoId: "GY7E4Eurb0Q" },
      { title: "Node Js Title 3", videoId: "36TUIIZgiu0" },
    ],
  };

  const [videoId, setVideoId] = useState(courses[courseName][0].videoId);
  const [title, setTitle] = useState(courses[courseName][0].title);

  const renderVideo = () => {
    return (
      <>
        <h1>{title}</h1>
        <iframe
          title="video"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </>
    );
  };

  // const handleVideoChange = (videoId) => {
  //   setVideoId(videoId);
  // };
  return (
    <CourseStyled>
      <h1 className="course__title">
        Welcome to the {courseName.toUpperCase()} Course
      </h1>
      <div className="course__data">
        <div className="course__content">
          <CourseContent
            courses={courses}
            courseName={courseName}
            setVideoId={setVideoId}
            setTitle={setTitle}
          />
        </div>
        <div className="course__video">{renderVideo()}</div>
      </div>
    </CourseStyled>
  );
};

const CourseStyled = styled.div`
  .course__title {
    font-size: 4rem;
    color: #50d0fe;
    text-align: center;
  }
  .course__data {
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    .course__content {
      width: 40%;
      border: 1px solid gray;
    }
  }
`;

export default Course;
