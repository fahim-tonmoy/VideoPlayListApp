import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import CourseContent from "./CourseContent";
import CourseVideo from "../CourseVideo";
import styled from "styled-components";

const Course = (props) => {
  const location = useLocation();
  const courseName = location.pathname.split("/")[1];
  const courses = {
    reactjs: [
      { id: 1, title: "How React Js Works", videoId: "5Xy-t8k_M4A" },
      {
        id: 2,
        title: "React Js Virtual DOM Explained",
        videoId: "2C5834qx0sA",
      },
      { id: 3, title: "React Js ESLint, Formatting", videoId: "ii8GaRjRoNI" },
      {
        id: 4,
        title: "React Js JSX Element & Rendering Elements",
        videoId: "Uj-Bt0pWEP4",
      },
      {
        id: 5,
        title: "React Js Components and Props Core Concept",
        videoId: "xVx5VqfX75Q",
      },
      { id: 6, title: "React Js State & Lifecycle", videoId: "CzyspyBe7rk" },
      {
        id: 7,
        title: "React Js Event Handling & Control Re Rendering",
        videoId: "QLxjMwVu0xY",
      },
      {
        id: 8,
        title: "React Js Conditional Rendering, List and Keys",
        videoId: "k_q-SCeYLJU",
      },
      { id: 9, title: "React Js Form Handling", videoId: "hbLTt10nhOA" },
      { id: 10, title: "React Js Lifting State Up", videoId: "v7UpjUQJjWY" },
    ],
    nodejs: [
      { id: 1, title: "Node.js Introduction", videoId: "WC-g0JtEIwM" },
      { id: 2, title: "How Node.js Works", videoId: "qImH1bFubW4" },
      { id: 3, title: "Node.js Installation", videoId: "J5sCarsKX1s" },
      {
        id: 4,
        title: "Node.js Global Object & Module System",
        videoId: "IFBeIUX3J8M",
      },
      { id: 5, title: "Node.js Server & Core Modules", videoId: "6Yv3YXgPBJU" },
      { id: 6, title: "Node.js Stream & Buffer", videoId: "BPdRVquo5pg" },
      { id: 7, title: "Understanding Node.js ", videoId: "dBd1j6x2HOo" },
      { id: 8, title: "Node.js Project (Part 1)", videoId: "Xg4effPSJXk" },
      { id: 9, title: "Node.js Project (Part 2)", videoId: "_7AKC-Q9mKc" },
      { id: 10, title: "Node.js Project (Part 3) ", videoId: "OwXw8nV7RPc" },
    ],
    tailwindcss: [
      { title: "Tailwind Css Introduction", videoId: "X7XbjwD6fVY", id: 1 },
      { title: "Tailwind Css Installation", videoId: "6LF7y7T0_EU", id: 2 },
      {
        title: "Tailwind Css Utility-First Approach",
        videoId: "HxVdmUGGtJk",
        id: 3,
      },
      {
        title: "Tailwind Css Responsive variants",
        videoId: "36TUIIZgiu0",
        id: 4,
      },
      {
        title: "Tailwind Css Hover focus & other state variants",
        videoId: "GY7E4Eurb0Q",
        id: 5,
      },
      {
        title: "Tailwind Css Dark mode variant",
        videoId: "1PjVAoUxKfI",
        id: 6,
      },
      {
        title: "Tailwind Css Composing Utilities ",
        videoId: "9F7Cmfw5uLc",
        id: 7,
      },
      { title: "Tailwind Css @layer Directive", videoId: "FzqkDsWFpeA", id: 8 },
      {
        title: "Tailwind Css @variants Directive",
        videoId: "ZPHsMQSRXlQ",
        id: 9,
      },
      {
        title: "Tailwind Css theme() and screen()",
        videoId: "m71mvBqdNXY",
        id: 10,
      },
    ],
  };

  // states
  const [videoId, setVideoId] = useState(courses[courseName][0].videoId);
  const [title, setTitle] = useState(courses[courseName][0].title);
  const [changedPrevLesson, setChangedPrevLesson] = useState(false);
  const [changedNextLesson, setChangedNextLesson] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState(1);

  useEffect(() => {
    // find current video
    const CurrentLesson = courses[courseName].find((course) => {
      return course.id === currentLessonId;
    });
    // previous next video
    const PrevLesson = courses[courseName].find((course) => {
      return course.id === currentLessonId - 1;
    });
    // find next video
    const NextLesson = courses[courseName].find((course) => {
      return course.id === currentLessonId + 1;
    });

    if (changedPrevLesson === true) {
      handlePrev(CurrentLesson, PrevLesson);
      setChangedPrevLesson(false);
    } else if (changedNextLesson === true) {
      handleNext(CurrentLesson, NextLesson);
      setChangedNextLesson(false);
    }
  }, [changedPrevLesson, changedNextLesson]);

  // previous button
  const handlePrev = (CurrentLesson, PrevLesson) => {
    if (PrevLesson !== undefined) {
      setVideoId(PrevLesson.videoId);
      setTitle(PrevLesson.title);
      setCurrentLessonId(PrevLesson.id);
    } else {
      setVideoId(CurrentLesson.videoId);
    }
  };

  // next button
  const handleNext = (CurrentLesson, NextLesson) => {
    if (NextLesson !== undefined) {
      setVideoId(NextLesson.videoId);
      setTitle(NextLesson.title);
      setCurrentLessonId(NextLesson.id);
    } else {
      setVideoId(CurrentLesson.videoId);
    }
  };
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
            setCurrentLessonId={setCurrentLessonId}
          />
        </div>
        <div className="course__video">
          <CourseVideo
            title={title}
            videoId={videoId}
            setChangedPrevLesson={setChangedPrevLesson}
            setChangedNextLesson={setChangedNextLesson}
          />
        </div>
      </div>
      <Link to="/">
        <button className="button"> Back To Home</button>
      </Link>
    </CourseStyled>
  );
};

const CourseStyled = styled.div`
  .course__title {
    font-size: 4rem;
    color: #02741d8a;
    text-align: center;
  }
  .course__data {
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    .course__content {
      width: 30%;
      border: 1px solid gray;
      background-color: #81f1eb;
    }
  }
  .button {
    margin-left: 70px;
    margin-top: 40px;
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #02741d8a;
    font-size: 1rem;
    color: black;
    cursor: pointer;
  }
`;

export default Course;
