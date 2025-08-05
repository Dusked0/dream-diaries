import React, { useState, useRef, useEffect } from "react";

const InfoBox = () => {
  const [showLegal, setShowLegal] = useState(false);

  return (
    // <div className="flex-1 p-2 rounded bg-conic/decreasing from-orange-200 via-blue-200 to-orange-200">
    <div className="flex-1 bg-gray-200 p-2 rounded w-full">
      <h1 className="text-2xl">Dream diaries sticker album</h1>
      <p>Welcome to the fanmade recreation of the Tears of Themis 4th anniversary event.</p>
      <p>Create limitless in this version!</p>
      <br />

      <h2 className="text-lg">How to play</h2>
      <ul className="list-disc pl-5">
        <li>Choose your book and background with the buttons.</li>
        <li>Click on a sticker to add it to the canvas.</li>
        <li>Drag stickers to move them around.</li>
        <li>Click on a sticker to select it and scale/rotate.</li>
        <li>Use the buttons to change the order of the selected sticker.</li>
        <li>Download your page as an image.</li>
      </ul>
      <br />

      <button
        onClick={() => setShowLegal(!showLegal)}
        className="text-sm underline text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {showLegal ? "Hide legal notice" : "Show legal notice"}
      </button>
      {showLegal && (
        <div className="mt-2 bg-gray-100 p-4 rounded text-sm text-gray-700">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This is a fan-made project inspired by the 4th Anniversary event of <em>Tears of Themis</em>. It is not affiliated with, endorsed by, or associated with miHoYo, HoYoverse, or any of their subsidiaries.
          </p>
          <p className="mb-2">
            All rights to <em>Tears of Themis</em>, including characters, artwork, and assets, belong to miHoYo / HoYoverse. This is an unofficial, non-commercial fan project.
          </p>
          <p className="mb-2">
            This project is intended for personal and entertainment purposes only. No profit is made or intended.
          </p>
          <p>
            If you are the owner of any content and would like it to be removed or credited differently, please contact me and I will take appropriate action.
          </p>
          <p className="mt-4">
            <strong>Icon Credits: </strong>
            Icons used in this project are provided by <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Flaticon</a>. Attribution required by the authors:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><a href="https://www.flaticon.com/free-icons/delete" title="delete icons" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Delete icons</a> created by bqlqn - Flaticon</li>
            <li><a href="https://www.flaticon.com/free-icons/up" title="up icons" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Up icons</a> created by The Icon Tree - Flaticon</li>
            <li><a href="https://www.flaticon.com/free-icons/layer" title="layer icons" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Layer icons</a> created by The Icon Tree - Flaticon</li>
            <li><a href="https://www.flaticon.com/free-icons/layer-up" title="layer up icons" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Layer up icons</a> created by muhammad atho' - Flaticon</li>
            <li><a href="https://www.flaticon.com/free-icons/layer-down" title="layer down icons" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">Layer down icons</a> created by muhammad atho' - Flaticon</li>
          </ul>
        </div>
      )}

    </div>
  )
}

export default InfoBox;