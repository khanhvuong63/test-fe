import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Paper from "@mui/material/Paper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { mockData } from "~/data/mock-data";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

interface Category {
  id: number;
  label: string;
  image: string;
}
const CategoryMenu: React.FC = () => {
  const categoryData: Category[] = [
    { id: 1, label: "Bộ lọc gió", image: "/Product_3.png" },
    { id: 1, label: "Bộ lọc gió", image: "/Product_1.png" },
    { id: 1, label: "Bộ lọc gió", image: "/Product_1.png" },
  ];
  const repeatedCategories = categoryData.flatMap((category) => [
    { ...category },
    { ...category },
  ]);
  return (
    <div
      style={{ backgroundColor: "#F4F6F8" }}
      className=" max-w-[1340px] mx-auto p-4 flex"
    >
      <div className="basis-[20vw] w-full max-w-xs p-4 bg-white rounded-lg shadow-md gap-1">
        {repeatedCategories.map((category, index) => (
          <Paper
            sx={{ marginBottom: 2, textAlign: "center" }}
            key={index}
            elevation={0}
          >
            <CardActionArea>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 50 }}
                  image={category.image}
                />
                <Typography variant="h6" component="div" sx={{ m: 1 }}>
                  {category.label}
                </Typography>
                <KeyboardArrowRightIcon sx={{ ml: 2 }} />
              </CardContent>
            </CardActionArea>
          </Paper>
        ))}
      </div>
      <div className="basis-[80vw]">
        <div className="flex flex-wrap gap-4 p-4 items-center">
          {repeatedCategories.map((category, index) => (
            <Card
              sx={{
                marginBottom: 1,
                width: 300,
                borderRadius: 3,
                padding: 2,
              }}
              key={index}
            >
              <CardActionArea sx={{}}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 60 }}
                    image={category.image}
                  />
                  <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                    {category.label}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <div className="flex justify-between items-center px-4 pt-2 text-primary">
          <Typography
            sx={{ fontSize: "18px", fontWeight: "bold", color: "#1e2939" }}
          >
            Sản Phẩm Bán Chạy
          </Typography>
          <Typography>
            Xem tất cả <KeyboardArrowRightIcon />
          </Typography>
        </div>
        <div className=" flex p-4">
          {mockData.products.map((category) => (
            <Card sx={{ maxWidth: 200, margin: 1 }}>
              <CardMedia component="img" height="100" image={category.image} />
              <CardContent sx={{ pb: 1 }}>
                <Chip
                  label="Giá cực sốc"
                  color="warning"
                  size="small"
                  icon={<LocalFireDepartmentIcon fontSize="small" />}
                />
                <Typography variant="body2" color="text.secondary">
                  {category.name}
                </Typography>

                <Typography variant="h6" component="div" color="error">
                  {category.price.toLocaleString()} đ
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <span className="line-through">
                    {category.discountPrice.toLocaleString()} đ
                  </span>
                  <span className="p-2 text-red-700">-10%</span>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
