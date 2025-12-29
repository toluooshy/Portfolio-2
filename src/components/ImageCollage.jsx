import "./ImageCollage.css";

export default function ImageCollage({ images, onOpen }) {
  const shown = images.slice(0, 8);
  const extra = images.length - 8;

  return (
    <div className="collage" onClick={onOpen}>
      {shown.map((src, i) => (
        <img key={i} src={src} className={`img i${i}`} alt="" />
      ))}
      {extra > 0 && <div className="more">…</div>}
    </div>
  );
}
