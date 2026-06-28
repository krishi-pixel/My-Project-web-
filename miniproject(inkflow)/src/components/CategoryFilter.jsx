import "../styles/CategoryFilter.css";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "React",
    "AI",
    "Programming",
    "Travel",
    "Web Design",
  ];

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;