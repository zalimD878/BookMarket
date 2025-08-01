import type { Book } from "../types/books";
import "../App.css";
import bookImage from "../assets/bookImage.svg";

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
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : bookImage
              }
              alt="book image"
            />
            <h4>{book.volumeInfo.title}</h4>
            <h4>{book.volumeInfo.authors}</h4>
            <h4>{book.volumeInfo.publishedDate}</h4>
            <h4>{book.volumeInfo.publisher}</h4>
            {/* <button onClick={handleBookCard}>more...</button> */}
          </div>
        );
      })}
    </div>
  );
}
