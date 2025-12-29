import { useState } from "react";
import { parseDescription } from "../utils/parseDescription";
import ImageCollage from "./ImageCollage";
import GalleryModal from "./GalleryModal";

export default function EntryCard({ entry }) {
  const meta = parseDescription(entry.description);
  const [open, setOpen] = useState(false);

  return (
    <article>
      <h2>{meta.title}</h2>
      <h4>{meta.subtitle}</h4>

      <ImageCollage images={entry.images} onOpen={() => setOpen(true)} />

      <p>{meta.text}</p>

      {meta.links?.map((l) => (
        <a key={l} href={l} target="_blank" rel="noreferrer">
          {l}
        </a>
      ))}

      {open && (
        <GalleryModal
          images={entry.images}
          captions={entry.captions}
          onClose={() => setOpen(false)}
        />
      )}
    </article>
  );
}
