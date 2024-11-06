import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className={`faq-item`}>
      <div
        className="faq-header"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className={`faq-index ${index < 10 ? "before:content-['0']" : ""} max-lg:hidden`}>
            {index}
          </div>
          <div className={`faq-question ${active ? "max-lg:text-p1" : ""}`}>
            {item.question}
          </div>
        </div>

        <div className={`faq-icon ${active ? "before:bg-p1 after:rotate-0 after:bg-p1" : ""}`}>
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          <div className="faq-answer">{item.answer}</div>
        )}
      </SlideDown>

      <div className={`faq-bg ${active ? "active" : ""}`}>
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="faq-line" />
      </div>
    </div>
  );
};

export default FaqItem;
