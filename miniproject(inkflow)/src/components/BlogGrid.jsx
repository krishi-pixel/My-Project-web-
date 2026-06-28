import BlogCard from "./BlogCard";
import "../styles/BlogGrid.css";

function BlogGrid({ posts }) {
  return (
    <section className="blog-grid-section">

      <div className="section-title">

        <h2>Latest Articles</h2>

        <p>
          Discover articles from different categories.
        </p>

      </div>

      <div className="blog-grid">

        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <h3 className="no-posts">
            No articles found.
          </h3>
        )}

      </div>

    </section>
  );
}

export default BlogGrid;