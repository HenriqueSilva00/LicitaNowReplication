import cookieImg from "../assets/cookie.png";
import "./style/CookiePreferences.css";

export default function CookiePreferences() {
  const openCookieSettings = () => {
    alert("Abrir preferências de cookies");
  };

  return (
    <button
      className="cookie-button"
      onClick={openCookieSettings}
      aria-label="Preferências de Cookies"
    >
      <img src={cookieImg} alt="Cookies" />
    </button>
  );
}
