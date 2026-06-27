import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import Footer from "./components/Footer";

import courses, { footerLinks } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [enrolledCount, setEnrolledCount] = useState(0);

  const categories = [
    "All",
    "Web",
    "Python",
    "AI & ML",
    "Data Science",
    "DSA",
    "Cloud",
    "Cyber Security",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function handleEnroll(courseTitle) {
    setSelectedCourse(courseTitle);
    setShowForm(true);
  }

  function handleFormSubmit(data) {
    alert(
      `🎉 Congratulations ${data.name}!\n\nYou have successfully enrolled in ${selectedCourse}.`
    );

    setEnrolledCount((prev) => prev + 1);

    setShowForm(false);
  }

  return (
    <>
      <Header enrolledCount={enrolledCount} />

      <main className="container">

        {/* HERO */}

        <section className="hero">

          <div className="hero-text">

            <h1>
              Learn Tech Skills
              <br />
              That Get You Hired 🚀
            </h1>

            <p>
              Master React, Python, AI, Machine Learning,
              Cloud Computing and much more with
              industry experts.
            </p>

            <Button
              text="Browse Courses"
              onClick={() => {
                document
                  .getElementById("courses")
                  .scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            />

          </div>

        </section>

        {/* STATS */}

        <section className="stats">

          <div className="stat-card">
            <h2>5000+</h2>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <h2>100+</h2>
            <p>Courses</p>
          </div>

          <div className="stat-card">
            <h2>40+</h2>
            <p>Mentors</p>
          </div>

          <div className="stat-card">
            <h2>4.9★</h2>
            <p>Average Rating</p>
          </div>

        </section>

        {/* SEARCH */}

        <div className="search-container">

          <input
            type="text"
            placeholder="🔍 Search courses..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        {/* FILTERS */}

        <div className="filter-buttons">

          {categories.map((category) => (
            <Button
              key={category}
              text={category}
              className={
                selectedCategory === category
                  ? "active-btn"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            />
          ))}

        </div>

        {/* COURSE GRID */}

        <section
          id="courses"
          className="course-grid"
        >

          {filteredCourses.map((course) => (

            <Card
              key={course.id}
              emoji={course.emoji}
              title={course.title}
              category={course.category}
              rating={course.rating}
              reviews={course.reviews}
              duration={course.duration}
              level={course.level}
              instructor={course.instructor}
              students={course.students}
              price={course.price}
              onEnroll={() =>
                handleEnroll(course.title)
              }
            />

          ))}

        </section>

      </main>

      {showForm && (
        <Form
          course={selectedCourse}
          onClose={() =>
            setShowForm(false)
          }
          onSubmit={handleFormSubmit}
        />
      )}

      <Footer columns={footerLinks} />
    </>
  );
}

export default App;