import type { City } from "../data";

interface Props {
  city: City;
}

// Завдання 1: функціональний компонент
function CityInfo({ city }: Props) {
  return (
    <section className="card">
      <h2>Завдання 1 — Місто (функціональний компонент)</h2>
      <h3>{city.name}</h3>
      <p>Країна: {city.country}</p>
      <p>Рік заснування: {city.foundedYear}</p>
      <div className="gallery">
        {city.photos.map((photo) => (
          <figure key={photo.title}>
            <img src={photo.src} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default CityInfo;
