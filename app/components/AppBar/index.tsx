import MiddleContent from "./AppBarMiddle/middleContent";
import BottomContent from "./AppBarBottom/bottomContent";
const AppBar: React.FC = () => {
  return (
    <header>
      <div className=" bg-primary p-4 ">
        <div className="container mx-auto max-w-[1440px] flex justify-between items-center gap-4">
          <div>
            Nhập mã <b className="text-red-400">NEW10</b> giảm ngay 10%
          </div>
          <div className="flex items-center gap-4">
            <div>Hotline: 091212313131</div>
            <div>Tai ung dung</div>
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
