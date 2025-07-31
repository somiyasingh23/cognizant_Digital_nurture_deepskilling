function CourseDetails({ courses }) {
  return (
    <>
      {courses.length === 0 && <p>No courses available.</p>}
      {courses.length > 0 && (
        <ul>
          {courses.map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <h4>{course.date}</h4>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default CourseDetails;
