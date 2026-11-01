import { Component } from "react";
import type { City } from "../data";

interface Props {
  city: City;
}

// Завдання 2: класовий компонент
class CityInfoClass extends Component<Props> {
  render() {
    const { city } = this.props;

    return (
      <section className="card">
        <h2>Завдання 2 — Місто (класовий компонент)</h2>
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
}

export default CityInfoClass;
