import { useState, useEffect } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scale, setScale] = useState(1);

  const toggleHandle = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggle(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.8, 1 - scrollY / 600); 
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-s1 py-5">
      <div className="container max-lg:hidden mx-auto px-10">
        <ul className="flex justify-between items-center gap-2">
          <li className="uppercase font-semibold !text-[#EAEDFF]">
            <a href="#features" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>
              Features
            </a>
          </li>
          <li className="size-1.5 rounded-full bg-[#3C52D9]"></li>
          <li className="uppercase font-semibold !text-[#EAEDFF]">
            <a href="#pricing" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>
              Pricing
            </a>
          </li>
          <li className="uppercase font-semibold !text-[#EAEDFF]">
            <a href="#" onClick={handleLinkClick}>
              <img
                src="/images/xora.svg"
                height={55}
                width={130}
                alt="Logo"
                style={{ transform: `scale(${scale})`, transition: 'transform 0.3s' }}
              />
            </a>
          </li>
          <li className="uppercase font-semibold !text-[#EAEDFF]">
            <a href="#faq" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>
              FAQ
            </a>
          </li>
          <li className="size-1.5 rounded-full bg-[#3C52D9]"></li>
          <li className="uppercase font-semibold !text-[#EAEDFF]">
            <a href="#download" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>
              Download
            </a>
          </li>
        </ul>
      </div>
      <div className="px-5 lg:hidden flex justify-between items-center">
        <img
          src="/images/xora.svg"
          alt="Logo"
          className="h-14 w-40"
          style={{ transform: `scale(${scale})`, transition: 'transform 0.3s' }}
        />
        <button
          onClick={toggleHandle}
          className="rounded-full border-2 flex justify-center items-center border-s4/25 size-10"
        >
          <img
            src={`/images/${toggle ? "close" : "magic"}.svg`}
            className="size-1/2 object-contain"
            alt=""
          />
        </button>
      </div>
      {toggle && (
        <div className="relative min-h-[90vh] lg:hidden flex flex-col justify-center items-start pl-10">
          <ul className="flex flex-col items-start justify-center gap-12">
            <li className="text-white font-semibold text-5xl uppercase">
              <a href="#features" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>Features</a>
            </li>
            <li className="text-white font-semibold text-5xl uppercase">
              <a href="#pricing" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>Pricing</a>
            </li>
            <li className="text-white font-semibold text-5xl uppercase">
              <a href="#faq" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>FAQ</a>
            </li>
            <li className="text-white font-semibold text-5xl uppercase">
              <a href="#download" className="hover:text-[#2EF2FF]" onClick={handleLinkClick}>Download</a>
            </li>
          </ul>
          <div className="block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
            <img src="/images/bg-outlines.svg" width={960} height={380} className="relative z-2" alt="" />
            <img src="/images/bg-outlines-fill.png" width={960} height={380} className="absolute inset-0 mix-blend-soft-light opacity-5" alt="" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
