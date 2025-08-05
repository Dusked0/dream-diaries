import React from "react";

export default function StickerButton({ src, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 rounded border bg-white shadow hover:ring-2 ring-blue-400 overflow-hidden"
    >
      <img
        src={src}
        alt="sticker"
        className="object-contain w-full h-full pointer-events-none"
      />
    </button>
  );
}
