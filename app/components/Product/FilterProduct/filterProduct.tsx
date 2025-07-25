import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { categories, brands, years, origins } from "~/data/mock-data";
import type { FilterCategory } from "~/data/mock-data";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const FilterProduct: React.FC = () => {
  const [categoryState, setCategoryState] =
    useState<FilterCategory[]>(categories);
  const [brandState, setBrandState] = useState<FilterCategory[]>(brands);
  const [yearState, setYearState] = useState<FilterCategory[]>(years);
  const [originState, setOriginState] = useState<FilterCategory[]>(origins);

  const handleCheckboxChange = (
    id: number,
    categoryList: FilterCategory[],
    setFunction: React.Dispatch<React.SetStateAction<FilterCategory[]>>
  ) => {
    setFunction((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="w-full max-w-xs p-4 bg-white rounded-lg ">
      <Typography
        variant="h5"
        className=" text-primary"
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <FilterAltIcon fontSize="large" />
        Bộ Lọc
      </Typography>
      <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category-content"
          id="category-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Danh mục sản phẩm
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {categoryState.map((category) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    checked={category.checked || false}
                    onChange={() =>
                      handleCheckboxChange(
                        category.id,
                        categoryState,
                        setCategoryState
                      )
                    }
                    color="primary"
                  />
                }
                label={
                  <span className="text-gray-700">
                    {category.label}{" "}
                    <span className="text-gray-500">({category.count})</span>
                  </span>
                }
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="price-content"
          id="price-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Khoảng giá
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className=" flex flex-col gap-2">
            <Button variant="outlined" size="small" sx={{ width: "100%" }}>
              Dưới 100.000 đ
            </Button>
            <Button variant="outlined" size="small" sx={{ width: "100%" }}>
              100.000 đ - 300.000 đ
            </Button>
            <Button variant="outlined" size="small" sx={{ width: "100%" }}>
              300.000 đ - 500.000 đ
            </Button>
            <Button variant="outlined" size="small" sx={{ width: "100%" }}>
              Trên 500.000 đ
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="brand-content"
          id="brand-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Thương hiệu
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {brandState.map((brand) => (
              <FormControlLabel
                key={brand.id}
                control={
                  <Checkbox
                    checked={brand.checked || false}
                    onChange={() =>
                      handleCheckboxChange(brand.id, brandState, setBrandState)
                    }
                    color="primary"
                  />
                }
                label={
                  <span className="text-gray-700">
                    {brand.label}{" "}
                    <span className="text-gray-500">({brand.count})</span>
                  </span>
                }
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="year-content"
          id="year-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Năm sản xuất
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {yearState.map((year) => (
              <FormControlLabel
                key={year.id}
                control={
                  <Checkbox
                    checked={year.checked || false}
                    onChange={() =>
                      handleCheckboxChange(year.id, yearState, setYearState)
                    }
                    color="primary"
                  />
                }
                label={
                  <span className="text-gray-700">
                    {year.label}{" "}
                    <span className="text-gray-500">({year.count})</span>
                  </span>
                }
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion
        defaultExpanded
        sx={{ boxShadow: "none", "&:before": { display: "none" } }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="origin-content"
          id="origin-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
            Xuất xứ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {originState.map((origin) => (
              <FormControlLabel
                key={origin.id}
                control={
                  <Checkbox
                    checked={origin.checked || false}
                    onChange={() =>
                      handleCheckboxChange(
                        origin.id,
                        originState,
                        setOriginState
                      )
                    }
                    color="primary"
                  />
                }
                label={
                  <span className="text-gray-700">
                    {origin.label}{" "}
                    <span className="text-gray-500">({origin.count})</span>
                  </span>
                }
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterProduct;
