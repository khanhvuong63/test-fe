import React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import type { Product } from "~/data/mock-data";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 1 }}>
      <CardMedia component="img" height="200" image={product.image} />
      <CardContent sx={{ pb: 1 }}>
        <Chip
          label="Giá cực sốc"
          color="warning"
          size="small"
          icon={<LocalFireDepartmentIcon fontSize="small" />}
        />
        <Typography variant="body2" color="text.secondary">
          {product.name}
        </Typography>

        <Typography variant="h6" component="div" color="error">
          {product.price.toLocaleString()} đ
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <span className="line-through">
            {product.discountPrice.toLocaleString()} đ
          </span>
          <span className="p-2 text-red-700">-10%</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
        >
          Mua ngay
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
