import logo from "../assets/images/logo.png";
import Navbar from "../Components/Navbar";
import "../styles/style.css";

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
