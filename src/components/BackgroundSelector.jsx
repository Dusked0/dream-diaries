import Button from "../ui/Button";

const BackgroundSelector = (props) => {
  return (
    <div className="mx-auto">
      <h1>Choose background</h1>
      <div className="flex flex-wrap gap-1">
        <Button onClick={() => props.setBackground("backgrounds/empty.png")} content={"backgrounds/empty.png"} />
        <Button onClick={() => props.setBackground("backgrounds/park.png")} content={"backgrounds/park.png"} />
        <Button onClick={() => props.setBackground("backgrounds/water.png")} content={"backgrounds/water.png"} />
        <Button onClick={() => props.setBackground("backgrounds/old.png")} content={"backgrounds/old.png"} />
        <Button onClick={() => props.setBackground("backgrounds/yellow.png")} content={"backgrounds/yellow.png"} />
        <Button onClick={() => props.setBackground("backgrounds/red.png")} content={"backgrounds/red.png"} />
        <Button onClick={() => props.setBackground("backgrounds/green.png")} content={"backgrounds/green.png"} />
        <Button onClick={() => props.setBackground("backgrounds/purple.png")} content={"backgrounds/purple.png"} />
      </div>
    </div>
  )
}

export default BackgroundSelector;