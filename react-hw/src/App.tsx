import CityInfo from "./components/CityInfo";
import CityInfoClass from "./components/CityInfoClass";
import BookInfo from "./components/BookInfo";
import BookInfoClass from "./components/BookInfoClass";
import { city, book } from "./data";

function App() {
  return (
    <main className="container">
      <CityInfo city={city} />
      <CityInfoClass city={city} />
      <BookInfo book={book} />
      <BookInfoClass book={book} />
    </main>
  );
}

export default App;
