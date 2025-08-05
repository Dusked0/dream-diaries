"use client";

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import html2canvas from "html2canvas";
import Button from "../ui/Button";
import BookSelector from "./BookSelector";
import BackgroundSelector from "./BackgroundSelector";
import StickerMenu from "../ui/StickerMenu";
import InfoBox from "./InfoBox";
import Sticker from "./Sticker"

export default function StickerCanvas() {
  const [images, setImages] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [notebookImage, setNotebookImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showBookOptions, setShowBookOptions] = useState(true);
  const [showBackgroundOptions, setShowBackgroundOptions] = useState(true);
  const stageRef = useRef();

  let x = 360;
  let y = 780;

  if (window.innerHeight) {
    y = window.innerHeight - 50;
    x = y * 360 / 780;

    if (screen.width < x) {
      x = screen.width - 20;
      y = x * 780 / 360;
    }
  }

  useEffect(() => {
    setNotebook("books/choose.png");
    setBackground("backgrounds/empty.png");
    setShowBookOptions(true);
    setShowBackgroundOptions(true);
  }, []);

  const loadImage = (src, callback) => {
    const img = new window.Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => callback(img);
    img.onerror = () => console.error(`Kon afbeelding niet laden: ${src}`);
  };

  const addSticker = (src) => {
    loadImage(src, (img) => {
      const id = Date.now();
      setImages((prev) => [
        ...prev,
        {
          id,
          image: img,
          x: x / 2 - 50,
          y: y / 2 - 50,
          scale: 0.4,
          rotation: 0,
        },
      ]);
    });
  };

  const updateSticker = (id, updates) => {
    setImages((prev) =>
      prev.map((sticker) =>
        sticker.id === id ? { ...sticker, ...updates } : sticker
      )
    );
  };

  const removeSticker = () => {
    setImages((prev) => prev.filter((s) => s.id != selectedId));
  };

  const moveLayer = (direction) => {
    if (!selectedId) return;
    setImages((prev) => {
      const index = prev.findIndex((img) => img.id === selectedId);
      if (index === -1) return prev;
      const newImages = [...prev];
      const target = newImages.splice(index, 1)[0];
      let newIndex;
      switch (direction) {
        case "up":
          newIndex = Math.min(prev.length - 1, index + 1);
          break;
        case "down":
          newIndex = Math.max(0, index - 1);
          break;
        case "front":
          newIndex = prev.length - 1;
          break;
        case "back":
          newIndex = 0;
          break;
        default:
          return prev;
      }
      newImages.splice(newIndex, 0, target);
      return newImages;
    });
  };

  const exportImage = async () => {
    setSelectedId(null);
    const canvas = stageRef.current.container().children[0];
    const dataUrl = await html2canvas(canvas).then((canvas) => canvas.toDataURL());
    const link = document.createElement("a");
    link.download = "collage.png";
    link.href = dataUrl;
    link.click();
  };

  const setBackground = (src) => {
    loadImage(src, (img) => setBackgroundImage(img));
    setShowBackgroundOptions(false);
  };

  const setNotebook = (src) => {
    loadImage(src, (img) => setNotebookImage(img));
    setShowBookOptions(false);
  }

  return (
    <div className="w-full p-2">
      <div className="flex flex-wrap gap-2 flex-col-reverse md:flex-row">
        <div className="flex flex-1 flex-col gap-5 w-full">
          <div className="flex gap-1 mx-auto">
            <Button onClick={exportImage} title="Download as a .png" content={"Download image"} type="text" halfHeight />
            <Button
              onClick={() => setShowBookOptions(!showBookOptions)}
              title="Toggles the partner selection"
              content={"Change Book"}
              selected={showBookOptions}
              type="text"
              halfHeight
            />
            <Button
              onClick={() => setShowBackgroundOptions(!showBackgroundOptions)}
              title="Toggles the background selection"
              content={"Change background"}
              selected={showBackgroundOptions}
              type="text"
              halfHeight
            />
          </div>
          {showBookOptions && <BookSelector setBook={setNotebook} />}
          {showBackgroundOptions && <BackgroundSelector setBackground={setBackground} />}
          <div className="flex gap-1 mx-auto">
            <Button onClick={removeSticker} title="Remove sticker" content={"icons/trash.png"} />
            <Button onClick={() => moveLayer("up")} title="Layer up" content={"icons/up.png"} />
            <Button onClick={() => moveLayer("down")} title="Layer down" content={"icons/down.png"} />
            <Button onClick={() => moveLayer("front")} title="Bring to front" content={"icons/layer-up.png"} />
            <Button onClick={() => moveLayer("back")} title="Bring to back" content={"icons/layer-down.png"} />
          </div>

          <StickerMenu addSticker={addSticker} />

        </div>
        <div className={"h-[" + y + "px] bg-white flex-initial w-full md:w-auto"}>
          <Stage width={x} height={y} ref={stageRef}>
            <Layer>
              {backgroundImage && (
                <KonvaImage
                  image={backgroundImage}
                  x={0}
                  y={0}
                  width={x}
                  height={y}
                  listening={false}
                />
              )}
            </Layer>

            <Layer>
              {images.map((img) => (
                <Sticker
                  key={img.id}
                  image={img.image}
                  x={img.x}
                  y={img.y}
                  scale={img.scale}
                  rotation={img.rotation}
                  isSelected={selectedId === img.id}
                  onSelect={() => setSelectedId(img.id)}
                  onChange={(updates) => updateSticker(img.id, updates)}
                />
              ))}
            </Layer>
            <Layer>
              {notebookImage && (
                <KonvaImage
                  image={notebookImage}
                  x={0}
                  y={0}
                  width={x}
                  height={y}
                  listening={false}
                />
              )}
            </Layer>
          </Stage>
        </div>
        <InfoBox />
      </div>
    </div>
  );
}
