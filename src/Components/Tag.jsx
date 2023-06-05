import "../style/style.css";
import "../style/Tag.css"

export default function Tag({ tagId, tag }) {
  return (
    <div className="container-tag" key={tagId}>
      <p className="paraTag">{tag}</p>
    </div>
  );
}
