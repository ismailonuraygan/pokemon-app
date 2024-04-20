import Home from "./components/home/Home";
import CardDetail from "./components/card-detail/CardDetail";

export const router = [
  {
    path: "",
    element: Home,
  },
  {
    path: "card-detail",
    element: CardDetail,
  },
];
