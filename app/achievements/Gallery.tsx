"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { AchievementImage } from "./data";

export function Gallery({ images }: { images: AchievementImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<AchievementImage | null>(null);

  const open = (image: AchievementImage) => {
    setSelected(image);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <ul className="adv-gallery">
        {images.map((image) => (
          <li key={image.src}>
            <button type="button" className="adv-gallery-item" onClick={() => open(image)} aria-label={`拡大: ${image.alt}`}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 45vw, 260px" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="adv-lightbox"
        onKeyDown={(event) => event.stopPropagation()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onClose={() => setSelected(null)}
      >
        {selected && (
          <figure className="adv-lightbox-figure">
            <Image src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} sizes="90vw" />
            <figcaption>{selected.alt}</figcaption>
          </figure>
        )}
        <button type="button" className="mc-button adv-lightbox-close" onClick={() => dialogRef.current?.close()}>
          閉じる
        </button>
      </dialog>
    </>
  );
}
