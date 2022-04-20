import React from "react";
import styled from "styled-components";

const CourseVideo = ({
  title,
  videoId,
  setChangedPrevLesson,
  setChangedNextLesson,
}) => {
  return (
    <CourseVideoStyled>
      <h1>{title}</h1>
      <iframe
        title="video"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="buttons">
        <button onClick={() => setChangedPrevLesson(true)}>Prev</button>
        <button onClick={() => setChangedNextLesson(true)}>next</button>
      </div>
    </CourseVideoStyled>
  );
};

const CourseVideoStyled = styled.div`
  .buttons {
    display: flex;
    justify-content: space-between;
    button {
      width: 80px;
      height: 30px;
      border: none;
      border-radius: 8px;
      background-color: #02287488;
      font-size: 1rem;
      color: black;
      cursor: pointer;
    }
  }
`;
export default CourseVideo;
