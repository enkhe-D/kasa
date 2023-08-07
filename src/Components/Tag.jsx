import "../styles/style.css";
import "../styles/Tag.css";

export default function Tag({ tagId, tag }) {
  return (
    <div className="tag" key={tagId}>
      <span>{tag}</span>
    </div>
  );
}
