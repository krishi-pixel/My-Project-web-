import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="logo">
          <span>INK</span>FLOW
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Articles</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;