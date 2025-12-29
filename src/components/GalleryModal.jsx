export default function GalleryModal({ images, captions, onClose }) {
  return (
    <div className="modal">
      <button onClick={onClose}>×</button>
      <div className="gallery">
        {images.map((src, i) => (
          <figure key={i}>
            <img src={src} alt="" />
            <figcaption>{captions[i + 1]}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
