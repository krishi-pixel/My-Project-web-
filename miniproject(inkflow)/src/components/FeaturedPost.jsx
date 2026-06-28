import "../styles/FeaturedPost.css";

function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <section className="featured-section">
      <div className="featured-card">

        <div className="featured-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="featured-content">

          <span className="featured-badge">
            ⭐ Featured Article
          </span>

          <h2>{post.title}</h2>

          <div className="featured-info">
            <span>{post.category}</span>
            <span>{post.readingTime}</span>
          </div>

          <p>{post.description}</p>

          <button>Read More →</button>

        </div>

      </div>
    </section>
  );
}

export default FeaturedPost;