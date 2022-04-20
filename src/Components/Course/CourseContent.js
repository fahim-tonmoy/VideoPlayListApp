import React from "react";
import styled from "styled-components";

const CourseContent = ({ courses, courseName, setVideoId, setTitle }) => {
  return (
    <CourseContentStyled>
      <div className="lession__list">
        <h3>Lession List</h3>
      </div>
      <ul className="course__content__title">
        {courses[courseName].map((course, index) => {
          return (
            <li className="title__list" key={index}>
              <a
                href="#"
                onClick={() => {
                  setVideoId(course.videoId);
                  setTitle(course.title);
                }}
              >
                {course.title}
              </a>
            </li>
          );
        })}
      </ul>
    </CourseContentStyled>
  );
};

const CourseContentStyled = styled.div`
  .lession__list {
    text-align: center;
    border-bottom: 1px solid gray;
  }
  .course__content__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title__list {
      border-bottom: 1px solid gray;
      width: 100%;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      a {
        color: black;
      }
    }
  }
`;

export default CourseContent;
