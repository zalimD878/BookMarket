import type { BookList } from "../types/books";

export async function getBooksList(q: string, page: number): Promise<BookList> {
  const list = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&page=${page}`
  );
  const res = await list.json();
  console.log(res);

  return res;
}
