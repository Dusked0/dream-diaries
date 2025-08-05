import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Transformer } from "react-konva";

const Sticker = ({ image, x, y, scale, rotation, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current?.nodes([shapeRef.current]);
      trRef.current?.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <KonvaImage
        image={image}
        x={x}
        y={y}
        scaleX={scale}
        scaleY={scale}
        rotation={rotation}
        ref={shapeRef}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange({ x: e.target.x(), y: e.target.y() });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const rotation = node.rotation();
          node.scaleX(1);
          node.scaleY(1);
          onChange({ scale: scaleX, rotation });
        }}
        stroke={isSelected ? "blue" : null}
      />
      {isSelected && <Transformer ref={trRef} rotateEnabled={true} keepRatio={true} />}
    </>
  );
};

export default Sticker;