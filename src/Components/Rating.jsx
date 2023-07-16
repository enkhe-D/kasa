import "../style/Rating.css";

export default function Rating({ rating = 5 }) {
  return (
    <>
      <div className="container-rating">
        {[...Array(5)].map((_, starIndex) => (
          <p className="item-rating">
            <i
              key={starIndex + 1}
              className={`fa-solid fa-star rating ${
                starIndex < rating ? "colorRating" : ""
              }`}
            ></i>
          </p>
        ))}
      </div>
    </>
  );
}
