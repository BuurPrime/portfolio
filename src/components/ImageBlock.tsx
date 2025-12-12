"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { X } from "lucide-react";

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
        className="group rounded-lg overflow-hidden w-full h-auto block"
      >
        <Image
          src={image}
          alt={alt}
          width={700}
          height={0}
          className="w-full h-auto transition-transform duration-300 cursor-zoom-in outline-none"
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
          {/* Close Button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-[1010] p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 border border-neutral-900"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className={`relative w-[95vw] h-[95vh] transform transition-all duration-300 ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-contain cursor-zoom-out"
              sizes="95vw"
            />
          </div>
        </div>
      )}
    </>
  );
};
