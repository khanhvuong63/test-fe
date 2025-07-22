import AppBar from "~/components/AppBar/index";
import ProductPage from "~/components/Product/index";
import Footer from "~/components/Footer/index";
const Product: React.FC = () => {
  return (
    <div>
      <AppBar />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default Product;
