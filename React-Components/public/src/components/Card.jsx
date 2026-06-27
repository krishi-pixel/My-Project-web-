function Card({
  emoji,
  title,
  category,
  rating,
  reviews,
  duration,
  level,
  instructor,
  students,
  price,
  onEnroll,
}) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="course-icon">{emoji}</div>

        <span className={`level ${level.toLowerCase()}`}>
          {level}
        </span>
      </div>

      <h3>{title}</h3>

      <span className="category-badge">
        {category}
      </span>

      <div className="rating">
        ⭐ {rating}
        <span> ({reviews} Reviews)</span>
      </div>

      <div className="course-info">
        <p>👨‍🏫 {instructor}</p>
        <p>⏱ {duration}</p>
        <p>👥 {students} Students</p>
      </div>

      <div className="price-row">
        <h2>₹{price}</h2>

        <button
          className="enroll-btn"
          onClick={onEnroll}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Card;