import BannerProduct from "./BannerProduct/bannerProduct";
import ListProduct from "./ListProduct/listProduct";
const ProductPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#F4F6F8" }}>
      <BannerProduct />
      <ListProduct />
    </div>
  );
};

export default ProductPage;
