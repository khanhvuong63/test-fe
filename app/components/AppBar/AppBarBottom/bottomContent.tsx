import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const BottomContent: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        variant="contained"
        startIcon={<Menu />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ p: 1, borderRadius: "6px" }}
        color="primary"
      >
        Danh mục sản phẩm
      </Button>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Về chúng tôi
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Bài viết
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Catalog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Liên hệ
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 ">
        <span>
          <AccessTimeFilledIcon color="primary" sx={{ pr: "4px" }} />
          Hỗ trợ 24/7
        </span>
        <span>
          <VolunteerActivismIcon color="primary" sx={{ pr: "4px" }} />
          miễn phí vận chuyển
        </span>
        <span>
          <LocalShippingIcon color="primary" sx={{ pr: "4px" }} />
          Giao hàng nhanh 2h
        </span>
        <span>
          <ChangeCircleIcon color="primary" sx={{ pr: "4px" }} />
          30 ngày đổi trả
        </span>
      </div>
    </div>
  );
};
export default BottomContent;
