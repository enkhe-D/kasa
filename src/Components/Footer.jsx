import "../styles/style.css";
import "../styles/Footer.css";

export default function Footer({ imgFooter }) {
  return (
    <footer>
      <div className="footer">
        <p>
          <img src={imgFooter} alt="img footer" />
        </p>
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
