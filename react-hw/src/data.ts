// Замініть дані на свої: своє місто та свою улюблену книгу.
// Фото: покладіть свої зображення в public/images і вкажіть шляхи на кшталт "/images/photo1.jpg".

export interface City {
  name: string;
  country: string;
  foundedYear: number;
  photos: { src: string; title: string }[];
}

export interface Review {
  author: string;
  text: string;
}

export interface Book {
  title: string;
  author: string;
  genre: string;
  pages: number;
  reviews: Review[];
}

export const city: City = {
  name: "Вінниця",
  country: "Україна",
  foundedYear: 1363,
  photos: [
    { src: "/images/image1.jpg", title: "Фонтан Roshen" },
    { src: "/images/image2.jpg", title: "Водонапірна вежа" },
    { src: "/images/image3.jpg", title: "Садиба Пирогова" },
  ],
};

export const book: Book = {
  title: "Тіні забутих предків",
  author: "Коцюбинський Михайло Михайлович",
  genre: "Повість",
  pages: 128,
  reviews: [
    { author: "Олена", text: "Неймовірна атмосфера Карпат, читається на одному диханні." },
    { author: "Андрій", text: "Мова автора дуже образна, а історія кохання не залишає байдужим." },
    { author: "Марія", text: "Класика, яку варто перечитувати в різному віці." },
  ],
};
