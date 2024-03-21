import {
  nolight,
  light,
  uvlight,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Question",
  },
  {
    id: "testing",
    title: "Arguments",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];


const projects = [
  {
    name: "Costs",
    description:
      "Euthanaisa prevents health care spending that can be very costly for the families of the one who is dying.",
    tags: [
      {
        name: "don't fuel monopolies",
        color: "blue-text-gradient",
      },
    ],
    image: nolight,
  },
  {
    name: "Agency",
    description:
      "Euthanasia is ethical because it allows individuals more agency in their death.",
    tags: [
      {
        name: "care is not enough",
        color: "green-text-gradient",
      },
    ],
    image: light,
  },
  {
    name: "Pets",
    description:
      "Euthanasia is ethical because it is already the societal expectation and common practice for pets.",
    tags: [
      {
        name: "we deserve the same",
        color: "blue-text-gradient",
      },
    ],
    image: uvlight,
  },
];

export { projects };
