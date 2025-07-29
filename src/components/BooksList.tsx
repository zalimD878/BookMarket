import type { Book } from "../types/books";
import "../App.css";

interface Props {
  bookList: Book[];
}

export function Books({ bookList }: Props) {
  return (
    <div className="book-container">
      {bookList.map((book) => {
        return (
          <div className="book-card">
            <img
              className="img-title"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="book image"
            />
            <h4>{book.volumeInfo.title}</h4>
            <h4>{book.volumeInfo.authors}</h4>
            <h4>{book.volumeInfo.publishedDate}</h4>
            <h4>{book.volumeInfo.publisher}</h4>
          </div>
        );
      })}
    </div>
  );
}
