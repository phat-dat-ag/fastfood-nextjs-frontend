export const AUTH_ROUTES = {
  REGISTER: "/register",
  LOGIN: "/login",
} as const;

export const GUEST_ROUTES = {
  HOME: "/",
  PROMOTION: "/promotion",
  CHALLENGE: "/challenge",
  ABOUT_US: "/about-us",
} as const;

export const ADMIN_ROUTES = {
  HOME: "/admin",
  USER_MANAGEMENT: "/admin/user-management",
  PRODUCT_MANAGEMENT: "/admin/product-management",
} as const;

export const USER_ROUTES = {
  HOME: "/user",
  PROMOTION: "/user/promotion",
  CHALLENGE: "/user/challenge",
  ABOUT_US: "/user/about-us",
  CART: "/user/cart",
  ORDER_TRACKING: "/user/order-tracking",
} as const;
