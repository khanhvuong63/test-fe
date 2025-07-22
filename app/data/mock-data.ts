// mock-data.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
}
export const mockData = {
  products: [
    {
      id: 1,
      name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trail...",
      price: 299000,
      discountPrice: 329000,
      image: "/Product_1.png",
    },
    {
      id: 2,
      name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trail...",
      price: 299000,
      discountPrice: 329000,
      image: "/Product_2.png",
    },
    {
      id: 3,
      name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trail...",
      price: 299000,
      discountPrice: 329000,
      image: "/Product_3.png",
    },
    {
      id: 4,
      name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trail...",
      price: 299000,
      discountPrice: 329000,
      image: "/Product_4.png",
    },
    {
      id: 5,
      name: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Trail...",
      price: 299000,
      discountPrice: 329000,
      image: "/Product_2.png",
    },
  ] as const satisfies Product[],
};

export interface FilterCategory {
  id: number;
  label: string;
  count?: number;
  checked?: boolean;
}

export const categories: FilterCategory[] = [
  { id: 1, label: "Lọc gió Động cơ - Air Filter", count: 24, checked: true },
  { id: 2, label: "Lọc Nhiên Liệu - Fuel Filter", count: 24, checked: true },
  { id: 3, label: "Bộ lọc dầu", count: 24, checked: true },
  { id: 4, label: "Chưa phân loại", count: 24 },
  { id: 5, label: "Khác", count: 24 },
];

export const brands: FilterCategory[] = [
  { id: 1, label: "Asakashi", count: 24 },
  { id: 2, label: "Bosch", count: 24 },
  { id: 3, label: "Hyundai", count: 24 },
];

export const years: FilterCategory[] = [
  { id: 1, label: "2021", count: 24 },
  { id: 2, label: "2020", count: 24 },
  { id: 3, label: "2019", count: 24 },
  { id: 4, label: "2018", count: 24 },
];

export const origins: FilterCategory[] = [
  { id: 1, label: "Đức", count: 24 },
  { id: 2, label: "Nhật Bản", count: 24 },
  { id: 3, label: "Trung Quốc", count: 24 },
];
