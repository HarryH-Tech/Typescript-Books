export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
}

export interface IBookList {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookReleaseDate: string;
}
