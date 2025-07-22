import logo from "~/assets/logo_sunfil1.png";
import logovn from "~/assets/ico-country-c-vietnam.png";
import { InputBase, IconButton, Paper, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MiddleContent: React.FC = () => {
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
        <img src={logovn} alt="logo-vn" className="w-6 h-6 inline-block" />
        <span>VI</span>
        <span>
          <Badge badgeContent={4} sx={{ mr: 2 }} color="warning">
            <ShoppingCartIcon color="primary" />
          </Badge>
          Giỏ hàng
        </span>
        <span>
          <AccountCircleIcon fontSize="large" color="primary" />
          Tài khoản
        </span>
      </div>
    </div>
  );
};

export default MiddleContent;
