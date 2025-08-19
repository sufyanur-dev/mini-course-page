import { useEffect, useState } from "react";
import { getCourse } from "../api/course";
import CourseCard from "../components/CourseCard";
import "../styles/Courses.css";
import "../styles/CourseCard.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("parent");
  useEffect(() => {
    getCourse()
      .then((res) => {
        const formatted = res.slice(0, 4).map((item) => ({
          id: item.id,
          description: item.body,
          title: item.title,
          price: item.userId * 500, //fake price
        }));
        setCourses(formatted);
      })
      .catch((err) =>
        setError("Failed to load courses. Please try again later.")
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="loading">Loading Courses...</p>;
  }
  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default Courses;
