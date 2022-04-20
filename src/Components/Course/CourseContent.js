import React from "react";
import styled from "styled-components";

const CourseContent = ({
  courses,
  courseName,
  setVideoId,
  setTitle,
  setCurrentLessonId,
}) => {
  return (
    <CourseContentStyled>
      <div className="lesson__list">
        <h3> Lesson List</h3>
      </div>
      <ul className="course__content__title">
        {courses[courseName].map((course, index) => {
          return (
            <>
              <li
                className="title__list"
                key={index}
                onClick={() => {
                  setVideoId(course.videoId);
                  setTitle(course.title);
                  setCurrentLessonId(course.id);
                }}
              >
                {course.title}
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </CourseContentStyled>
  );
};

const CourseContentStyled = styled.div`
  .lesson__list {
    text-align: center;
    border-bottom: 1px solid gray;
    font-size: 1.5rem;
  }
  .course__content__title {
    width: 100%;
    margin-left: -40px !important;
    .title__list {
      /* border-bottom: 1px solid gray; */
      width: 100%;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      list-style: none;
      cursor: pointer;
      a {
        color: black;
      }
    }
    hr {
      background-color: black;
    }
  }
`;

export default CourseContent;
