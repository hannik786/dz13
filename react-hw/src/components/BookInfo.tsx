import type { Book } from "../data";

interface Props {
  book: Book;
}

// Завдання 3: функціональний компонент
function BookInfo({ book }: Props) {
  return (
    <section className="card">
      <h2>Завдання 3 — Книга (функціональний компонент)</h2>
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

export default BookInfo;
