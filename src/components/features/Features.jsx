import { Element } from "react-scroll";
import Button from "../button/Button";

const data = [
  {
    id: 0,
    icon: "/images/feature-1.png",
    caption: "DEMO caption",
    title: "feature 1",
    text: "TEXT 1",
    button: {
      icon: "/images/magictouch.svg",
      title: "watch the demo",
    },
  },
  {
    id: 1, 
    icon: "/images/feature-2.png",
    caption: "DEMO caption",
    title: "feature 2",
    text: "TEXT 2",
    button: {
      icon: "/images/magictouch.svg",
      title: "watch the demo",
    },
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <Element name="features">
        <div className="container">
          <div className="feature-container">
            {data.map((ele) => (
              <div key={ele.id} className="feature-item">
                <div className="feature-icon-container">
                  <div className="feature-connector">
                    <div className="feature-connector-line" />
                    <img src={ele.icon} className="feature-image" alt={ele.title} />
                  </div>
                </div>

                <p className="feature-caption">{ele.caption}</p>
                <h2 className="feature-title">{ele.title}</h2>
                <p className="feature-text">{ele.text}</p>
                <Button icon={ele.button.icon}>{ele.button.title}</Button>
              </div>
            ))}

            <ul className="feature-list">
              <div className="feature-list-divider" />
              {data.map(({ id, icon, title }) => (
                <li key={id} className="feature-list-item">
                  <div className="feature-list-item-divider" />
                  <div className="feature-list-icon-container">
                    <img src={icon} alt={title} className="feature-list-icon" />
                  </div>
                  <h3 className="feature-list-title">{title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
