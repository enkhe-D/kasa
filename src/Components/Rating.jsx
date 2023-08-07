import "../styles/style.css";
import "../styles/Rating.css";

export default function Rating({ rating = 5 }) {
  return (
    <>
      <div className="rating">
        {[...Array(5)].map((_, starIndex) => (
          <span key={starIndex + 1}>
            <i
              className={`fa-solid fa-star rating ${
                starIndex < rating ? "colorRating" : ""
              }`}
            ></i>
          </span>
        ))}
      </div>
    </>
  );
}
