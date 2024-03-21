import {
  nolight,
  light,
  uvlight,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "testing",
    title: "Testing",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];


const projects = [
  {
    name: "No Light",
    description:
      "An image of the tree with no light shone on it",
    tags: [
      {
        name: "0% think most illuminated",
        color: "blue-text-gradient",
      },
      {
        name: "0% think most noticeable",
        color: "green-text-gradient",
      },
    ],
    image: nolight,
  },
  {
    name: "Regular Light",
    description:
      "An image of the tree with a regular flashlight shone on it",
    tags: [
      {
        name: "66.7% think most illuminated",
        color: "blue-text-gradient",
      },
      {
        name: "37% think most noticeable",
        color: "green-text-gradient",
      },
    ],
    image: light,
  },
  {
    name: "UV Light",
    description:
      "An image of the tree with a UV flashlight shone on it",
    tags: [
      {
        name: "33.3% think most illuminated",
        color: "blue-text-gradient",
      },
      {
        name: "63% think most noticeable",
        color: "green-text-gradient",
      },
    ],
    image: uvlight,
  },
];

export { projects };
