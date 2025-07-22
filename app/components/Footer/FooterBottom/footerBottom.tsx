import logo from "~/assets/logo_footer.png";
import vn from "~/assets/ico-country-c-vietnam.png";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AppleIcon from "@mui/icons-material/Apple";
const FooterBottom: React.FC = () => {
  interface CardData {
    id: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
    color?: string;
  }
  const cards: CardData[] = [
    {
      id: 1,
      title: "Get It On",
      description: "Google Play Store",
      icon: <PlayArrowIcon fontSize="large" style={{ color: "white" }} />,
      color: "#2d3748",
    },
    {
      id: 2,
      title: "Hỗ trợ 24/7",
      description: "Apple App Store",
      icon: <AppleIcon fontSize="large" style={{ color: "white" }} />,
      color: "#4285f4",
    },
  ];
  return (
    <div className="flex items-center p-8  mx-auto  max-w-[1440px] text-neutral-700">
      <div>
        <p className="text-md font-bold mb-2 uppercase">
          Viet Hung Auto Production Trading Joint Stock Company
        </p>
        <ul>
          <li>
            Tax code: <b>0305094228</b>
          </li>
          <li>
            Address:{" "}
            <b>
              13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.
            </b>
          </li>
          <li>
            Phone number: <b>0283 760 7607</b>
          </li>
          <li>
            Opening hour: <b>09:00 - 22:00 from Mon - Fri</b>
          </li>
        </ul>
        <img src={logo} alt="logo" className="w-60" />
      </div>
      <div className="text-center flex-1">
        <p className="text-lg font-bold mb-4">Sitemap</p>
        <ul className="space-y-4">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/products">Article</a>
          </li>
          <li>
            <a href="/about">Cart</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="text-center flex-1">
        <p className="text-lg font-bold mb-4">Legal</p>
        <ul className="space-y-4">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Cookie policy</a>
          </li>
          <li>
            <a href="/refund-policy">Delivery policy</a>
          </li>
          <li>
            <a href="/shipping-policy">FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center text-lg font-bold">Download App</p>
        <div>
          {cards.map((card) => (
            <Card
              key={card.id}
              sx={{
                width: 220,
                margin: 1,
                borderRadius: 3,
              }}
              style={{ backgroundColor: card.color }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    color: "white",
                    padding: 1,
                  }}
                >
                  {card.icon && (
                    <Typography color="primary" variant="h4" sx={{ mr: 2 }}>
                      {card.icon}
                    </Typography>
                  )}
                  <Box>
                    <Typography component="div">{card.title}</Typography>
                    <Typography>{card.description}</Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <div className="flex justify-end items-center gap-1 p-2">
          <img src={vn} alt="vietnam" className="w-10 " />
          <span className="text-center text-lg">
            Vi <ArrowDropDown />
          </span>
        </div>
      </div>
    </div>
  );
};
export default FooterBottom;
