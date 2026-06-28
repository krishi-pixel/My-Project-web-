import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import "../styles/Hero.css";

function Hero({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">Modern React Blog</span>

        <h1>
          Discover Stories,
          <br />
          Ideas & Innovation
        </h1>

        <p>
          Explore articles about React, Artificial Intelligence,
          Programming, Web Development and Travel.
        </p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

      </div>
    </section>
  );
}

export default Hero;