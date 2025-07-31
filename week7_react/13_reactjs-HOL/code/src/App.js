import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import { books, blogs, courses } from "./data";
import "./App.css";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App" style={{ display: "flex", justifyContent: "space-around", padding: 40 }}>
      {/* Book Details */}
      {showBooks && (
        <div className="st2">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
      )}

      {/* Blog Details */}
      {showBlogs ? (
        <div className="v1">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      ) : null}

      {/* Course Details using ternary */}
      <div className="mystyle1">
        <h1>Course Details</h1>
        {showCourses ? (
          <CourseDetails courses={courses} />
        ) : (
          <p>Courses are hidden.</p>
        )}
      </div>
    </div>
  );
}

export default App;
