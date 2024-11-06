export const socials = [
    {
      id: "0",
      title: "x",
      icon: "/images/socials/x.svg",
      url: "#",
    },
    {
      id: "1",
      title: "Threads",
      icon: "/images/socials/threads.svg",
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      icon: "/images/socials/instagram.svg",
      url: "#",
    },
    {
      id: "3",
      title: "Discord",
      icon: "/images/socials/discord.svg",
      url: "#",
    },
  ];


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-flex">
          <div className="footer-copyright">
            <p>Copyright, JS Mastery</p>
          </div>
          <div className="footer-legal">
            <p className="footer-legal-item">Privacy Policy</p>
            <p className="footer-legal-item">Terms of Use</p>
          </div>

          <ul className="footer-socials">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="social-icon-img"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
