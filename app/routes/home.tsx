import type { Route } from "./+types/home";
import Product from "~/pages/Product/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Frontend Test" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Product />;
}
