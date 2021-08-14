const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">About</div>
      <p className="footer-text">
        Click on a emoji or search it to know what's that food called 😋
      </p>
      <ul className="social-icons-container">
        <li>
          <a
            href="https://github.com/tuhindas30/whatsthisfood"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="icon">
          <a
            href="https://twitter.com/tuhindas30"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
        <li className="icon">
          <a
            href="https://linkedin.com/in/tuhindas30"
            target="_blank"
            rel="noreferrer"
            className="icon">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="credits">
        Made with ❤️ by{" "}
        <span>
          <a
            href="https://tuhindas.me"
            className="site-color"
            target="_blank"
            rel="noreferrer">
            tuhindas
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
