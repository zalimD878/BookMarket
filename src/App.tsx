import { useState } from "react";
import { Search } from "./components/Search";
import { getBooksList } from "./api/books";
import type { BookList } from "./types/books";
import { Books } from "./components/BooksList";

export default function App() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookList, setBookList] = useState<BookList | null>(null);
  const [text, setText] = useState("");

  async function handleClick(text: string, page: number) {
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
    handleClick(text, page);
  }

  return (
    <div className="main-page">
      <Search
        handleClick={handleClick}
        text={text}
        setText={setText}
        page={page}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Books bookList={bookList?.items || []} />
      )}
      {error && <div>{error}</div>}
      {bookList ? (
        <div>
          <button onClick={handlePag}>prev</button>
          <button onClick={handlePag}>next</button>
        </div>
      ) : null}
    </div>
  );
}
