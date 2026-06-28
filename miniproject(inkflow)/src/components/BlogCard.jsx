import "../styles/BlogCard.css";

function BlogCard({ post }) {
  return (
    <div className="blog-card">

      <img
        src={post.image}
        alt={post.title}
      />

      <div className="blog-content">

        <div className="top-row">

          <span className="category">
            {post.category}
          </span>

          <span className="reading">
            {post.readingTime}
          </span>

        </div>

        <h3>{post.title}</h3>

        <p>{post.description}</p>

        <div className="bottom-row">

          <div>
            <strong>{post.author}</strong>
            <br />
            {post.date}
          </div>

          <button>
            Read →
          </button>

        </div>

      </div>

    </div>
  );
}

export default BlogCard;