import banner from "~/assets/banner.png";
import { mockData } from "~/data/mock-data";
import ProductCard from "../CardProduct/cardProduct";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const BannerProduct: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="text-gray-500 flex items-center gap-2 p-4">
        <span className="text-opacity-30">Trang chủ</span>
        <KeyboardArrowRightIcon />
        <span className="font-bold text-primary">Sản phẩm</span>
      </div>
      <div>
        <img src={banner} alt="banner product" />
      </div>
      <div className="bg-primary flex justify-center items-center p-4 py-8">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {mockData.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BannerProduct;
