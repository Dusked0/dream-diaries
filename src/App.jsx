import './App.css'

import StickerCanvas from "./components/StickerCanvas";
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <StickerCanvas />
      <Analytics />
    </>
  )
}

export default App
