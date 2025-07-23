import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PaymentsIcon from "@mui/icons-material/Payments";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import FooterMiddle from "./FooterMiddle/footerMiddle";
import FooterBottom from "./FooterBottom/footerBottom";
const Footer: React.FC = () => {
  interface CardData {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }
  const cards: CardData[] = [
    {
      id: 1,
      title: "Miễn phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu",
      icon: <PaymentsIcon fontSize="large" />,
    },
    {
      id: 2,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm.",
      icon: <HeadsetMicIcon fontSize="large" />,
    },
    {
      id: 3,
      title: "Giao hang nhanh 2h",
      description: "Trong vòng bán kính 10km nội thành TP HCM.",
      icon: <LocalShippingIcon fontSize="large" />,
    },
    {
      id: 4,
      title: "30 ngày đổi trả",
      description:
        "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển.",
      icon: <ChangeCircleIcon fontSize="large" />,
    },
  ];
  return (
    <footer>
      <div style={{ backgroundColor: "#F4F6F8" }} className="pb-8">
        <div className=" flex justify-center items-center gap-4 flex-wrap max-w-[1440px] mx-auto px-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              sx={{
                width: 300,
                margin: 1,
                minHeight: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                  }}
                >
                  {card.icon && (
                    <Typography color="primary" variant="h4" sx={{ mr: 2 }}>
                      {card.icon}
                    </Typography>
                  )}
                  <Box>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {card.description}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "#E6F1FF" }}>
        <FooterMiddle />
      </div>
      <div className="bg-white">
        <FooterBottom />
      </div>
    </footer>
  );
};
export default Footer;
