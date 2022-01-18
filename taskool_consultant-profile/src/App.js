import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consultant from "./components/Consultant";
import CreateNewCourse from './components/courses/NewCourse/CreateNewCourse'
import CourseContent from "./components/courses/ContentOfCourse/CourseContent";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Consultant />} />
        <Route path='/newcourse' element={<CreateNewCourse />} />
        <Route path='/coursecontent' element={<CourseContent />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
