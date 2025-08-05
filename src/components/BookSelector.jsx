import Button from "../ui/Button";

const BookSelector = (props) => {
  return (
    <div className="mx-auto">
      <h1>Choose book</h1>
      <div className="flex gap-1">
        <Button onClick={() => props.setBook("books/luke.png")} content={"stickers/characters/b1.png"} />
        <Button onClick={() => props.setBook("books/artem.png")} content={"stickers/characters/b3.png"} />
        <Button onClick={() => props.setBook("books/vyn.png")} content={"stickers/characters/b5.png"} />
        <Button onClick={() => props.setBook("books/marius.png")} content={"stickers/characters/b7.png"} />
      </div>
    </div>
  )
}

export default BookSelector;