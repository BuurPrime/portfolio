"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

interface ImageBlockProps {
  src: string;
  alt: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt }) => {
  const image = getImagePath(src);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200); // delay unmount for fade-out
  }, []);

  const openLightbox = useCallback(() => {
    setOpen(true);
    setTimeout(() => setVisible(true), 10); // small delay for fade-in
  }, []);

  // Close on Escape + lock scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = original;
      };
    }
  }, [open, close]);

  return (
    <>
      {/* Thumbnail */}
      <button
        type="button"
        onClick={openLightbox}
        className="group relative flex items-center justify-center rounded-lg overflow-hidden w-[700px] h-[400px]"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 cursor-zoom-in"
          sizes="700px"
        />
      </button>

      {/* Lightbox Overlay */}
      {open && (
        <div
          onClick={close}
          className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-[1px] cursor-zoom-out p-4
            transition-opacity duration-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-5xl h-[80vh] transform transition-all duration-300 ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-contain cursor-zoom-out"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}
    </>
  );
};
