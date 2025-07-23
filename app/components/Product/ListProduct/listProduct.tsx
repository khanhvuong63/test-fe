import FilterProduct from "../FilterProduct/filterProduct";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { mockData } from "~/data/mock-data";
import ProductCard from "../CardProduct/cardProduct";
import type { Product } from "~/data/mock-data";

const ListProduct: React.FC = () => {
  const repeatedProducts: Product[] = [];
  for (let i = 0; i < 4; i++) {
    repeatedProducts.push(...mockData.products); // Thêm toàn bộ products vào mảng mới 4 lần
  }
  return (
    <div className="max-w-[1440px] mx-auto flex flex-row py-8">
      <div className="basis-[20vw]">
        <FilterProduct />
      </div>
      <div className="basis-[80vw]">
        <div className="flex justify-between gap-4 px-4 text-gray-800">
          <div className=" text-xl font-bold ">
            <p>Danh sách sản phẩm</p>
          </div>
          <div className="flex items-center gap-2">
            <h4>Sắp xếp theo</h4>
            <div className="flex gap-4 font-bold">
              <Button variant="outlined" color="primary" size="small" sx={{}}>
                Liên quan
              </Button>
              <Button variant="outlined" color="primary" size="small" disabled>
                Bán chạy
              </Button>
              <Button variant="outlined" color="primary" size="small" disabled>
                Mới nhất
              </Button>
              <Button variant="outlined" color="primary" size="small" disabled>
                Nổi bật
              </Button>
            </div>
            <Typography>
              {"Giá: Thấp -> cao"}
              <ExpandMoreIcon />
            </Typography>
          </div>
        </div>
        <div className=" flex justify-center items-center p-4 ">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {repeatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
