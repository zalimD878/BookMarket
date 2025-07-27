import { useState } from "react";
import { Search } from "./components/Search";
import { getBooksList } from "./api/books";
import type { BookList } from "./types/books";

export default function App() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookList, setBookList] = useState<BookList | null>(null);
  const [text, setText] = useState("");

  async function handleClick(text: string) {
    setLoading(true);
    setError("");

    try {
      const list = await getBooksList(text, page);
      setBookList(list);
    } catch (error) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  }

  function handlePag() {
    setPage(page + 1);
    handleClick(text);
  }

  return (
    <div>
      <Search handleClick={handleClick} text={text} setText={setText} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        bookList?.items.map((book) => <div>{book.volumeInfo.title}</div>)
      )}
      {error && <div>{error}</div>}
      {/* Books -> Book */}
      {/* Pagination */}
      <button onClick={handlePag}>prev</button>
      <button onClick={handlePag}>next</button>
    </div>
  );
}
