import "../styles/style.css";

export default function Tag({ tagId, tag }) {
  return (
    <div className="tag" key={tagId}>
      <span>{tag}</span>
    </div>
  );
}
