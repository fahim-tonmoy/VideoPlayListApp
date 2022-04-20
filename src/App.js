import { BrowserRouter, Route, Routes } from "react-router-dom";

import Course from "./Components/Course/Course";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:coursename" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
