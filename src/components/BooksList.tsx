import type { Book } from "../types/books";
import "../App.css";

interface Props {
  bookList: Book[];
}

export function Books({ bookList }: Props) {
  return (
    <div>
      {bookList.map((book) => {
        return (
          <div className="book-card">
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
