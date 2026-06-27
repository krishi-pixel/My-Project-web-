function Footer({ columns }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>

            {column.links.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>
        ))}
      </div>

      <hr />

      <p className="copyright">
        © 2026 DevLearn. Built with ❤️ using React
      </p>
    </footer>
  );
}

export default Footer;