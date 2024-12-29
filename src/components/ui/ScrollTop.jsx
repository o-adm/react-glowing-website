import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(function () {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="icon" />
        </div>
      )}
    </>
  );
}

export default ScrollTop;
