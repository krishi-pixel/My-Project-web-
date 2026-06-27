function Header({ enrolledCount }) {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">💙</div>

        <div>
          <h2>DevLearn</h2>
          <p>Tech Course Catalogue</p>
        </div>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#courses">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="badge">
        📚 {enrolledCount} Enrolled
      </div>
    </header>
  );
}

export default Header;