import MiddleContent from "./AppBarMiddle/middleContent";
import BottomContent from "./AppBarBottom/bottomContent";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
const AppBar: React.FC = () => {
  return (
    <header>
      <div className=" bg-primary p-4 ">
        <div className="container mx-auto max-w-[1440px] flex justify-between items-center gap-4">
          <div>
            <MonetizationOnIcon sx={{ mr: 1 }} />
            Nhập mã <b className="text-red-400">NEWBIE</b> giảm ngay 10% cho lần
            đầu mua hàng
          </div>
          <div className="flex items-center gap-4">
            <div>
              <PhoneIcon sx={{ mr: 1 }} />
              Hotline: <b className="text-red-400">0283 760 7607</b>
            </div>

            <div>
              <SystemUpdateIcon sx={{ mr: 1 }} />
              Tải ứng dụng
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white mx-auto  p-4">
        <div className=" mx-auto max-w-[1440px] text-gray-900">
          <MiddleContent />
          <BottomContent />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
