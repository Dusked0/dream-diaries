import React from "react";

export default function Button({ content, onClick, title = "", selected = false, type = "image", halfHeight = false }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={"w-16 " + (halfHeight ? "md:w-18 h-[40px]" : "h-16") +
        " rounded-lg border border-gray-500 md:p-[2px] " +
        (selected ? "bg-gray-200" : "bg-white") +
        " shadow-md mx-auto hover:ring-2 ring-blue-400 overflow-hidden"}
    >
      {
        type === "image" ? (
          <img
            src={content}
            alt={content}
            className="object-contain w-full h-full pointer-events-none"
          />
        ) : (
          <p className="text-xs">
            {content}
          </p>
        )
      }
    </button>
  );
}