import logo from "../assets/images/logo.png";
import Navbar from "../Components/Navbar";
import "../style/style.css";
import "../style/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
      <Navbar />
    </header>
  );
}
