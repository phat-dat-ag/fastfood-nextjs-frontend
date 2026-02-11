import {
  AdminHeaderItemType,
  FooterSectionType,
  HeaderActionType,
  HeaderItemType,
} from "../types/layout.types";
import HomeIcon from "@mui/icons-material/Home";
import FastFoodIcon from "@mui/icons-material/Fastfood";
import Person from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { ADMIN_ROUTES, GUEST_ROUTES, USER_ROUTES } from "./route.constants";

export const GUEST_HEADER_ITEMS: Array<HeaderItemType> = [
  {
    title: "Trang chủ",
    path: GUEST_ROUTES.HOME,
  },
  {
    title: "Khuyến mãi",
    path: GUEST_ROUTES.PROMOTION,
  },
  {
    title: "Thử thách",
    path: GUEST_ROUTES.CHALLENGE,
  },
  {
    title: "Về chúng tôi",
    path: GUEST_ROUTES.ABOUT_US,
  },
];

export const ADMIN_DRAWER_MAX_WIDTH_PX: number = 300;
export const ADMIN_DRAWER_MIN_WIDTH_PX: number = 60;

export const ADMIN_NAVBAR_ITEMS: Array<AdminHeaderItemType> = [
  {
    title: "Home page",
    path: ADMIN_ROUTES.HOME,
    icon: HomeIcon,
  },
  {
    title: "User management",
    path: ADMIN_ROUTES.USER_MANAGEMENT,
    icon: Person,
  },
  {
    title: "Product management",
    path: ADMIN_ROUTES.PRODUCT_MANAGEMENT,
    icon: FastFoodIcon,
  },
];

export const USER_HEADER_ITEMS: Array<HeaderItemType> = [
  {
    title: "Trang chủ",
    path: USER_ROUTES.HOME,
  },
  {
    title: "Khuyến mãi",
    path: USER_ROUTES.PROMOTION,
  },
  {
    title: "Thử thách",
    path: USER_ROUTES.CHALLENGE,
  },
  {
    title: "Về chúng tôi",
    path: USER_ROUTES.ABOUT_US,
  },
];

export const USSER_HEADER_ACTIONS: Array<HeaderActionType> = [
  {
    icon: ShoppingCartIcon,
    path: USER_ROUTES.CART,
  },
  {
    icon: LocalShippingIcon,
    path: USER_ROUTES.ORDER_TRACKING,
  },
];

export const FOOTER_SECTIONS: Array<FooterSectionType> = [
  {
    title: "Thông tin",
    items: [
      { title: "Tin tức", path: "/" },
      { title: "Khuyến mãi", path: "/" },
      { title: "Tuyển dụng", path: "/" },
      { title: "Nhượng quyền", path: "/" },
      { title: "Đăng ký chào hàng", path: "/" },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    items: [
      { title: "Điều khoản sử dụng", path: "/" },
      { title: "Chính sách bảo mật", path: "/" },
      { title: "Chính sách giao hàng", path: "/" },
      { title: "Tham gia thử thách", path: "/" },
      { title: "Chính sách thành viên", path: "/" },
    ],
  },
  {
    title: "Kênh liên hệ",
    items: [
      { title: "Facebook", path: "/" },
      { title: "Instagram", path: "/" },
      { title: "Zalo", path: "/" },
    ],
  },
];
