import { AdminHeaderItemType } from "../types/layout.types";
import HomeIcon from "@mui/icons-material/Home";
import FastFoodIcon from "@mui/icons-material/Fastfood";

export const ADMIN_DRAWER_MAX_WIDTH_PX: number = 300;
export const ADMIN_DRAWER_MIN_WIDTH_PX: number = 60;

export const ADMIN_NAVBAR_ITEMS: Array<AdminHeaderItemType> = [
  {
    title: "Home page",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "Product management",
    path: "/product-management",
    icon: FastFoodIcon,
  },
];
