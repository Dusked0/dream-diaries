import React, { useState, useRef, useEffect } from "react";
import Button from "../ui/Button";

import { charactersStickers } from "../data/charactersStickers";
import { stickers1Stickers } from "../data/stickers1Stickers";
import { stickers2Stickers } from "../data/stickers2Stickers";
import { wordsStickers } from "../data/wordsStickers";
import { flatStickers } from "../data/flatStickers";
import { accessoriesStickers } from "../data/accessoriesStickers";

const Tabs = [
  { id: 0, file: charactersStickers, name: "Characters" },
  { id: 1, file: stickers1Stickers, name: "Stickers 1" },
  { id: 2, file: stickers2Stickers, name: "Stickers 2" },
  { id: 3, file: wordsStickers, name: "Words" },
  { id: 4, file: flatStickers, name: "Flat" },
  { id: 5, file: accessoriesStickers, name: "Accessories" }
]

const StickerMenu = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="p-2 rounded bg-conic/decreasing from-orange-100 via-cyan-100 to-orange-100">
      <div className="flex flex-row gap-1 mb-2 place-content-center">
        {
          Tabs.map((t) => (
            <Button
              key={t.id}
              content={t.name}
              onClick={() => setSelectedTab(t.id)}
              selected={selectedTab == t.id}
              type="text" halfHeight />
          )
          )
        }
      </div>
      <div className="grid grid-cols-6 gap-1 place-content-stretch md:grid-cols-7">
        {Tabs[selectedTab].file.map((s) => (
          <Button key={s.id} content={s.src} onClick={() => props.addSticker(s.src)} />
        ))}
      </div>
    </div>
  )
}

export default StickerMenu;