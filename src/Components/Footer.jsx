import "../style/style.css";
import "../style/Footer.css";

export default function Footer({ imgFooter }) {
  return (
    <footer>
      <p className="footer-container">
        <img src={imgFooter} alt="img footer" className="imgFooter" />
      </p>
      <p className="text-footer">2020 Kasa. All rights reserved</p>
    </footer>
  );
}
