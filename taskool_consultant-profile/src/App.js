import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consultant from "./components/Consultant";
import UploadCourse from "./components/courses/UploadCourse";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Consultant />} />
        <Route exact path='/UploadCourse' element={<UploadCourse />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
