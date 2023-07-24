import "../styles/style.css";

export default function Rating({ rating = 5 }) {
  return (
    <>
      <div className="rating">
        {[...Array(5)].map((_, starIndex) => (
          <span>
            <i
              key={starIndex + 1}
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
