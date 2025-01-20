import great1 from "../assets/great1.png";
import great2 from "../assets/great2.png";
import great3 from "../assets/great3.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";

type ItemGreatType = {
  no: number;
  image: string;
  deskripsi: string;
};

type CardHappyProps = {
  no: number;
  rating: number;
  deskripsi: string;
};

type CardArtikelType = {
  no: number;
  title: string;
  deskripsi: string;
  image: string;
};

export const ItemGreat: ItemGreatType[] = [
  {
    no: 1,
    image: great1,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
  },
  {
    no: 2,
    image: great2,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    no: 3,
    image: great3,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    no: 4,
    image: great1,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    no: 5,
    image: great2,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
  {
    no: 6,
    image: great3,
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum",
  },
];

export const CardClient: CardHappyProps[] = [
  {
    no: 1,
    rating: 5,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 2,
    rating: 2,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 3,
    rating: 4,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 4,
    rating: 1,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 5,
    rating: 4,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 6,
    rating: 5,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
  {
    no: 7,
    rating: 3,
    deskripsi:
      " We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand.",
  },
];

export const ItemArtikel: CardArtikelType[] = [
  {
    no: 1,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog1,
  },
  {
    no: 2,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog2,
  },
  {
    no: 3,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog3,
  },
  {
    no: 4,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog4,
  },
  {
    no: 5,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog5,
  },
  {
    no: 6,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog6,
  },
  {
    no: 7,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog7,
  },
  {
    no: 8,
    title: "Do millennials care about saving?",
    deskripsi:
      "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    image: blog4,
  },
];
