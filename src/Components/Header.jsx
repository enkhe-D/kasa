import "../style/style.css";
import logo from "../assets/images/logo.png";
import Navbar from "../Components/Navbar";

export default function Header() {
  return (
    <header>
      <p className="logo">
        <img src={logo} alt="" />
      </p>
      <Navbar />
    </header>
  );
}
