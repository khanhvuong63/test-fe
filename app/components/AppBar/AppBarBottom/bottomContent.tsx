import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/icons-material/Menu";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CategoryMenu from "~/components/Product/CategoryMenu/categoryMenu";
import React from "react";
import Popover from "@mui/material/Popover";
const BottomContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsHovering(true);
  };

  const handlePopoverClose = () => {
    setIsHovering(false);
    // Delay để cho phép kiểm tra nếu chuột đang trên popover
    setTimeout(() => {
      if (!isHovering) {
        setAnchorEl(null);
      }
    }, 100); // 100ms nhỏ đủ để mượt mà
  };

  const open = Boolean(anchorEl);
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        variant="contained"
        startIcon={<Menu />}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          p: 1,
          borderRadius: "6px",
        }}
        color="primary"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Danh mục sản phẩm
      </Button>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "auto" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
        onClose={handlePopoverClose}
        slotProps={{
          paper: {
            onMouseEnter: () => setIsHovering(true),
            onMouseLeave: () => {
              setIsHovering(false);
              setAnchorEl(null);
            },
          },
        }}
      >
        <CategoryMenu />
      </Popover>

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
