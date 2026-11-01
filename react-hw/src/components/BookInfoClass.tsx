import { Component } from "react";
import type { Book } from "../data";

interface Props {
  book: Book;
}

// Завдання 4: класовий компонент
class BookInfoClass extends Component<Props> {
  render() {
    const { book } = this.props;

    return (
      <section className="card">
        <h2>Завдання 4 — Книга (класовий компонент)</h2>
        <h3>{book.title}</h3>
        <p>Автор: {book.author}</p>
        <p>Жанр: {book.genre}</p>
        <p>Кількість сторінок: {book.pages}</p>
        <h4>Рецензії</h4>
        <ul className="reviews">
          {book.reviews.map((review) => (
            <li key={review.author}>
              <strong>{review.author}:</strong> {review.text}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default BookInfoClass;
