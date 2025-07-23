import React, { useState } from "react";
import logo from "~/assets/logo_sunfil1.png";
import logovn from "~/assets/ico-country-c-vietnam.png";
import {
  InputBase,
  IconButton,
  Paper,
  Badge,
  Typography,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { mockData } from "~/data/mock-data";
import ProductCard from "../../Product/CardProduct/cardProduct";

const MiddleContent: React.FC = () => {
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
  const productShow = mockData.products[0];
  return (
    <div className="flex justify-between items-center w-full">
      <img src={logo} alt="logo" />
      <Paper
        component="form"
        sx={{
          p: "4px",
          display: "flex",
          alignItems: "center",
          width: 770,
          borderRadius: "100px",
          border: "1px solid #0154C5",
        }}
      >
        <InputBase
          sx={{ ml: "15px", flex: 1 }}
          placeholder="Tìm sản phẩm"
          inputProps={{ "aria-label": "Tìm sản phẩm" }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", mx: "5px" }}
          aria-label="camera"
        >
          <CameraAltIcon />
        </IconButton>
        <IconButton
          type="button"
          sx={{
            p: "10px",
            backgroundColor: "#0154C5",
            borderRadius: "20px",
            width: "70px",
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className="flex items-center gap-2">
        <img src={logovn} alt="logo-vn" className="w-8 h-8 inline-block" />
        <span>VI</span>
        <span>
          <Badge badgeContent={4} sx={{ mr: 2 }} color="warning">
            <Typography
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <ShoppingCartIcon
                color="primary"
                sx={{ width: 30, height: 30 }}
              />
            </Typography>
          </Badge>
          Giỏ hàng
        </span>
        <span>
          <AccountCircleIcon fontSize="large" color="primary" />
          Tài khoản
        </span>
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
          <Typography className="hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
            {productShow && (
              <ProductCard key={productShow.id} product={productShow} />
            )}
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default MiddleContent;
