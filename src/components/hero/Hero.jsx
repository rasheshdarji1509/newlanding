import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="hero-section">
      <Element name="hero">
        <div className="container">
          <div className="hero-content">
            <div className="caption">
              Video Editing
            </div>
            <h1 className="hero-title">
              Amazingly simple
            </h1>
            <p className="hero-description">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="hero-image">
            <img
              src="/images/hero.png"
              className="hero-img"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
