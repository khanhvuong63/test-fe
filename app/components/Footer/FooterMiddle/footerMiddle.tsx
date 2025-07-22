import { Box, Typography, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const FooterMiddle: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-4 flex-wrap max-w-[1440px] mx-auto p-8 text-neutral-700">
      <Box>
        <Typography variant="h5">
          <MapIcon fontSize="large" /> Xem hệ thống 88 cửa hàng trên toàn quốc
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 40 }}
          endIcon={<ArrowRightAltIcon />}
        >
          Xem ngay
        </Button>
      </Box>
      {/* Additional footer content can be added here */}
    </div>
  );
};
export default FooterMiddle;
