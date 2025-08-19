const CourseCard = ({ title, description, price }) => {
  const handleEnroll = () => {
    alert("You have enrolled successfully!");
  };

  return (
    <div className="course-card">
      <h2 className="course-title">{title}</h2>
      <p className="course-desc">{description}</p>
      <div className="course-footer">
        <p className="course-price">Price: ₹{price}</p>
        <button className="enroll-btn" onClick={handleEnroll}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
