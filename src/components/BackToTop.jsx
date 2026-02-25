import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style/BackToTop.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : "hide"}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      type="button"
    >
      <FaArrowUp />
    </button>
  );
}
